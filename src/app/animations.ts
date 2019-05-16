import {
  trigger,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,
  keyframes
} from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateY(20px)',
        }),
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ], { optional: true }),
    ]),
  ]);
