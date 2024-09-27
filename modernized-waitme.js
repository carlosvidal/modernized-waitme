class WaitMe {
  constructor(element, options = {}) {
    this.elem = typeof element === 'string' ? document.querySelector(element) : element;
    this.elemClass = 'waitMe';
    this.currentID = Date.now();
    this.options = Object.assign({
      effect: 'bounce',
      text: '',
      bg: 'rgba(255,255,255,0.7)',
      color: '#000',
      maxSize: '',
      waitTime: -1,
      textPos: 'vertical',
      fontSize: '',
      source: '',
      onClose: () => {}
    }, options);

    this.init();
  }

  init() {
    this.waitMeObj = document.createElement('div');
    this.waitMeObj.className = `${this.elemClass}`;
    this.waitMeObj.dataset.waitmeId = this.currentID;

    const effectElemCount = this.getEffectElemCount();
    const effectObj = this.createEffectObject(effectElemCount);
    const waitMeText = this.createWaitMeText();

    const waitMeDivObj = document.createElement('div');
    waitMeDivObj.className = `${this.elemClass}_content ${this.options.textPos}`;
    if (effectObj) waitMeDivObj.appendChild(effectObj);
    if (waitMeText) waitMeDivObj.appendChild(waitMeText);

    this.waitMeObj.appendChild(waitMeDivObj);

    if (this.elem.tagName === 'HTML') {
      this.elem = document.body;
    }

    this.elem.classList.add(`${this.elemClass}_container`);
    this.elem.dataset.waitmeId = this.currentID;
    this.elem.appendChild(this.waitMeObj);

    this.setStyles();
    this.handlePosition();

    if (this.options.waitTime > 0) {
      setTimeout(() => this.hide(), this.options.waitTime);
    }
  }

  getEffectElemCount() {
    const effectCounts = {
      none: 0, bounce: 3, rotateplane: 1, stretch: 5, orbit: 2, roundBounce: 12,
      win8: 5, win8_linear: 5, ios: 12, facebook: 3, rotation: 1, timer: 2,
      pulse: 1, progressBar: 1, bouncePulse: 3, img: 1
    };
    return effectCounts[this.options.effect] || 0;
  }

  createEffectObject(effectElemCount) {
    if (effectElemCount === 0) return null;

    const effectObj = document.createElement('div');
    effectObj.className = `${this.elemClass}_progress ${this.options.effect}`;

    let effectElemHTML = '';
    if (this.options.effect === 'img') {
      effectElemHTML = `<img src="${this.options.source}">`;
    } else {
      for (let i = 1; i <= effectElemCount; ++i) {
        const color = Array.isArray(this.options.color) ? (this.options.color[i] || '#000') : this.options.color;
        effectElemHTML += `<div class="${this.elemClass}_progress_elem${i}" style="${this.getSpecificAttr()}:${color}"></div>`;
      }
    }
    effectObj.innerHTML = effectElemHTML;

    return effectObj;
  }

  createWaitMeText() {
    if (!this.options.text) return null;

    const waitMeText = document.createElement('div');
    waitMeText.className = `${this.elemClass}_text`;
    waitMeText.style.color = Array.isArray(this.options.color) ? this.options.color[0] : this.options.color;
    if (this.options.fontSize) {
      waitMeText.style.fontSize = this.options.fontSize;
    }
    waitMeText.textContent = this.options.text;

    return waitMeText;
  }

  setStyles() {
    this.waitMeObj.style.background = this.options.bg;

    if (this.options.maxSize && this.options.effect !== 'none') {
      const effectObj = this.waitMeObj.querySelector(`.${this.elemClass}_progress`);
      if (effectObj) {
        const elemMax = effectObj.offsetHeight;
        if (this.options.effect === 'img') {
          effectObj.style.height = `${this.options.maxSize}px`;
          effectObj.querySelector('img').style.maxHeight = '100%';
        } else if (this.options.maxSize < elemMax) {
          const zoom = this.options.maxSize / elemMax - 0.2;
          let offset = '-50%';
          // ... (rest of the offset logic)
          effectObj.style.transform = `scale(${zoom}) translateX(${offset})`;
          effectObj.style.whiteSpace = 'nowrap';
        }
      }
    }
  }

  handlePosition() {
    const elemContentObj = this.waitMeObj.querySelector(`.${this.elemClass}_content`);
    elemContentObj.style.marginTop = `-${elemContentObj.offsetHeight / 2}px`;

    if (this.elem.offsetHeight > window.innerHeight) {
      const setElTop = (getTop) => {
        elemContentObj.style.top = 'auto';
        elemContentObj.style.transform = `translateY(${getTop}px) translateZ(0)`;
      };

      const updatePosition = () => {
        const sTop = window.pageYOffset;
        const elTop = this.elem.offsetTop;
        const wHeight = window.innerHeight;
        const elHeight = this.elem.offsetHeight;
        const contentHeight = elemContentObj.offsetHeight;

        let getTop = sTop - elTop + wHeight / 2;
        getTop = Math.max(0, Math.min(getTop, elHeight - contentHeight));

        setElTop(getTop);
      };

      updatePosition();
      window.addEventListener('scroll', updatePosition);
    }
  }

  getSpecificAttr() {
    return ['rotation', 'pulse'].includes(this.options.effect) ? 'border-color' : 'background-color';
  }

  hide() {
    this.elem.classList.remove(`${this.elemClass}_container`);
    this.elem.removeAttribute('data-waitme_id');
    this.waitMeObj.remove();
    if (typeof this.options.onClose === 'function') {
      this.options.onClose(this.elem);
    }
  }

  static hideAll() {
    document.body.classList.add('hideMe');
    setTimeout(() => {
      document.querySelectorAll('.waitMe_container:not([data-waitme_id])').forEach(el => el.remove());
      document.body.classList.remove('waitMe_body', 'hideMe');
    }, 200);
  }
}

// Initialize on window load
window.addEventListener('load', WaitMe.hideAll);

// Export for module usage
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = WaitMe;
}
