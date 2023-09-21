//Credit  due to the fine work of David Lange https://blog.finiam.com/blog/spotlight-effect-with-js-and-css
interface SpotlightOptions {
  innerRadius?: number;
  outerRadius?: number;
  outerColor?: string;
}

function isMobile(){
return 'ontouchstart' in window;
}
function getOpacity(){
  if (isMobile())
    return "#00000014"
  else
  return "#00000011"
  
}
class Spotlight {
  active = true;
  el: HTMLElement;
  innerRadius: number;
  outerRadius: number;
  outerColor: string;
  boundMouseEventListener: (event: MouseEvent) => void;
  boundTouchMoveListener: (event: TouchEvent) => void;

  constructor({
    outerColor = getOpacity(),
    innerRadius = 10,
    outerRadius = 300
  }: SpotlightOptions) {
    this.el = this.insertSpotlightElement();
    this.outerColor = outerColor;
    this.innerRadius = innerRadius;
    this.outerRadius = outerRadius;

    // Bind mouse move handler
    this.boundMouseEventListener = this.handleMouseMove.bind(this);

    // Bind touch move handler
    this.boundTouchMoveListener = this.handleTouchMove.bind(this);

    // Initialize the spotlight
    this.switchOn();

  }

  switchOn() {
    this.active = true;

    // Attach mouse move and touch move events
    document.addEventListener("mousemove", this.boundMouseEventListener);
    document.addEventListener("touchmove", this.boundTouchMoveListener);

    this.el.style.animation = "enter 1s ease forwards";

    setTimeout(() => {
      this.el.style.animation =
        "pulse 3s ease-in-out infinite alternate forwards";
    }, 1000);
  }

  switchOff() {
    this.active = false;

    // Detach mouse move and touch move events
    document.removeEventListener("mousemove", this.boundMouseEventListener);
    document.removeEventListener("touchmove", this.boundTouchMoveListener);

    this.el.style.animation = "exit 1s ease forwards";
  }

  toggleLight() {
    if (this.active) {
      this.switchOff();
    } else {
      this.switchOn();
    }
  }

  insertSpotlightElement() {
    const el = document.createElement("div");
    el.classList.add("spotlight");
        el.style.background = 'transparent';  // Set initial background to transparent
    document.body.appendChild(el);

    return el;
  }

  handleMouseMove(event: MouseEvent) {
    this.updateEl(event.clientX, event.clientY);
  }

  handleTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    this.updateEl(touch.clientX, touch.clientY);
  }

  updateEl(x: number, y: number) {
    this.el.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0) ${this.innerRadius}px, rgba(0, 0, 0, 0.01) ${(this.innerRadius + this.outerRadius) / 2}px, ${this.outerColor} ${this.outerRadius}px)`;
  }
}

export default Spotlight;
