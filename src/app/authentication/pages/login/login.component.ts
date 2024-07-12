import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  value = '';
  pin = '';

  start = new Date().getTime();
  originPosition = { x: 0, y: 0 };
  last = {
    starTimestamp: this.start,
    starPosition: this.originPosition,
    mousePosition: this.originPosition,
  };
  config = {
    starAnimationDuration: 2500,
    minimumTimeBetweenStars: 250,
    minimumDistanceBetweenStars: 75,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    colors: ['249 146 253', '252 254 255'],
    sizes: ['1.4rem', '1rem', '0.6rem'],
    animations: ['fall-1', 'fall-2', 'fall-3'],
  };

  count = 0;

  rand = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  selectRandom = <T>(items: T[]): T => items[this.rand(0, items.length - 1)];
  // Function to concatenate a value with a unit
  withUnit = (value: number, unit: string): string => `${value}${unit}`;

  // Function to append "px" unit to a value
  px = (value: number): string => this.withUnit(value, 'px');

  // Function to append "ms" unit to a value
  ms = (value: number): string => this.withUnit(value, 'ms');

  calcDistance = (a: any, b: any) => {
    const diffX = b.x - a.x,
      diffY = b.y - a.y;
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  };
  calcElapsedTime = (start: any, end: any) => end - start;

  appendElement = (element: any) => {
    const mouseArea = document.getElementById('mouseArea');

    mouseArea?.appendChild(element);
  };
  removeElement = (element: any, delay: any) =>
    setTimeout(() => {
      const mouseArea = document.getElementById('mouseArea');
      mouseArea?.removeChild(element);
    }, delay);

  listenMouse($event: MouseEvent) {
    if (new Date().getTime() - this.start > 250) {
      this.start = new Date().getTime();
    }else{
      return;
    }

    const star = document.createElement('span'),
      color = this.selectRandom(this.config.colors);

    star.className = 'star pi pi-star-fill';

    star.style.left = this.px($event.clientX);
    star.style.top = this.px($event.clientY);
    star.style.fontSize = this.selectRandom(this.config.sizes);
    star.style.color = `rgb(${color})`;
    star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
    star.style.animationName = this.config.animations[this.count++ % 3];
    star.style.animationDuration = this.ms(this.config.starAnimationDuration);

    this.appendElement(star);

    this.removeElement(star, this.config.starAnimationDuration);
  }
}
