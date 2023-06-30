// import { jsx as _jsx } from 'react/jsx-runtime';
// import { useState, useContext, useEffect, useRef } from 'react';
// import { addPropertyControls, ControlType, RenderTarget } from 'framer';
// import { motion, MotionContext, useMotionValue } from 'framer-motion';
// import { SplitText } from '@cyriacbr/react-split-text';

// const visibleVariant = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0 };

// function variantToString(variant) {
//   return variant ? 'visible' : 'hidden';
// }
// /**
//  * Motion Text
//  * By Benjamin den Boer & Adam Seckel
//  *
//  * @framerIntrinsicWidth 200
//  * @framerIntrinsicHeight 200
//  * @framerDisableUnlink
//  *
//  * @framerSupportedLayoutWidth fixed
//  * @framerSupportedLayoutHeight any
//  */ export default function MotionText(props) {
//   const { opacity, x, y, scale, rotate, rotateX, rotateY } = props.effectOptions;
//   const isCanvas = RenderTarget.current() === RenderTarget.canvas;
//   const initialOpacity = useMotionValue(isCanvas ? 1 : 0);
//   const isSpring = props.transitionOptions.type === 'spring';
//   const lastVariant = useRef();
//   const [animate, setAnimate] = useState(() =>
//     isCanvas ? 'visible' : variantToString(!props.variant),
//      );

//   const hasIndexAnimatedRef = useRef({});
//   useEffect(() => {
//     // If the type of animation changes,
//     // reset the ref so that we don't confuse old indexes with new ones.
//     hasIndexAnimatedRef.current = {};
//   }, [props.type]); // Animate the text after React renders,

//   // and an animation frame has passed run the animation in the browser.
//   useEffect(() => {
//     if (isCanvas) return;
//     requestAnimationFrame(() => {
//       initialOpacity.set(1);
//       setAnimate(variantToString(props.variant));
//     });
//   }, []); // If the variant changes, trigger the animation if the variant boolean has changed.

//   useEffect(() => {
//     if (isCanvas) return;
//     if (lastVariant.current !== props.variant) {
//       hasIndexAnimatedRef.current = {};
//       setAnimate(variantToString(props.variant));
//     }
//     lastVariant.current = props.variant;
//   }, [props.variant]);

//   const springCurve = {
//     type: props.transitionOptions.type,
//     stiffness: props.transitionOptions.stiffness,
//     damping: props.transitionOptions.damping,
//     mass: props.transitionOptions.mass,
//   };
//   const easeCurve = {
//     type: props.transitionOptions.type,
//     duration: props.transitionOptions.duration,
//     ease: props.transitionOptions.ease,
//   }; // Constructing the variants based on Effects
//   // Hidden: from, visible: to

//   const item = {
//     hidden: { opacity, x, y, scale, rotate, rotateX, rotateY },
//     visible: visibleVariant,
//      };

//   const filteredTransition = isSpring ? springCurve : easeCurve;
//   const delay = props.transitionOptions.delay;
//   const isLetter = props.type === 'letter';
//   const isWord = props.type === 'word';
//   const isLine = props.type === 'line';
//      const splitWrapperStyle = { display: 'contents' };

//   function getSplitTextProps({ isLetter, isWord, isLine }) {
//     const sharedProps = {
//       type: props.type,
//       variants: item,
//       filteredTransition: filteredTransition,
//       delay: delay,
//       stagger: props.stagger,
//       perWord: props.perWord,
//       hasIndexAnimatedRef,
//     };
//     if (isLetter)
//       return {
//         LetterWrapper: (info) =>
//           /*#__PURE__*/ _jsx(MotionSpanComponent, { ...info, ...sharedProps }),
//       };
//     if (isLine)
//       return {
//         LineWrapper: (info) => /*#__PURE__*/ _jsx(MotionSpanComponent, { ...info, ...sharedProps }),
//       };
//     return {
//       WordWrapper: (info) => /*#__PURE__*/ _jsx(MotionSpanComponent, { ...info, ...sharedProps }),
//     };
//   }
//   return /*#__PURE__*/ _jsx(motion.div, {
//     style: {
//       width: '100%',
//       height: '100%', // display: "inline-block",
//       position: 'relative',
//       overflow: props.overflow ? 'visible' : 'hidden',
//       fontSize: props.font.fontSize,
//       fontFamily: props.font.font,
//       fontWeight: props.font.fontWeight,
//       letterSpacing: props.font.letterSpacing,
//       lineHeight: props.font.lineHeightType
//         ? props.font.lineHeight
//         : `${props.font.lineHeightPixels}px`,
//       textAlign: props.font.textAlign,
//       whiteSpace: props.font.whiteSpace,
//       color: props.color,
//       left: `${props.font.offset}%`,
//       margin: 0,
//       padding: 0,
//       opacity: initialOpacity,
//     },
//     initial: isCanvas ? 'visible' : 'hidden',
//     animate: animate,
//     children: isCanvas
//       ? props.text
//       : /*#__PURE__*/ _jsx(SplitText, {
//           style: splitWrapperStyle,
//           ...getSplitTextProps({ isLetter, isWord, isLine }),
//           children: props.text,
//         }),
//   });
// }

// const getIndex = (
//   isLetter,
//   isWord,
//   isLine,
//   countIndex = 0,
//   letterIndex = 0,
//   wordIndex = 0,
//   lineIndex = 0,
//   perWord,
// ) => {
//   if (isLetter) return perWord ? letterIndex : countIndex;
//   if (isWord) return countIndex;
//   return lineIndex;
// };

// const MotionSpanComponent = ({
//   type,
//   countIndex = 0,
//   letterIndex = 0,
//   wordIndex = 0,
//   lineIndex = 0,
//   variants,
//   isCanvas,
//   filteredTransition,
//   delay,
//   stagger,
//   children,
//   perWord,
//   hasIndexAnimatedRef,
// }) => {
//   const isLetter = type === 'letter';
//   const isWord = type === 'word';
//   const isLine = type === 'line';
//   const index = getIndex(
//     isLetter,
//     isWord,
//     isLine,
//     countIndex,
//     letterIndex,
//     wordIndex,
//     lineIndex,
//     perWord,
//   ); // We have to do a lot of work to prevent this component from animating after it's animated once.
//   // This is because SplitText aggressivly updates `keys` to rerender after the window resizes.
//   // This means we can't keep any state in these components, and have to read from the parent.
//   // If the layer has animated before, we override the inherited `initial` to whatever
//   // the inherited `animate` is, to prevent another animation.
//   const { animate } = useContext(MotionContext);
//   const props = {};
//   if (hasIndexAnimatedRef.current[index] === true) props.initial = animate;
//   return /*#__PURE__*/ _jsx(motion.span, {
//     ...props,
//     onAnimationComplete: () => (hasIndexAnimatedRef.current[index] = true),
//     style: {
//       perspective: 1200,
//       display: 'inline-block',
//       whiteSpace: 'pre',
//       margin: 0,
//       padding: 0,
//       willChange: 'transform',
//     },
//     variants: variants,
//     transition: { ...filteredTransition, delay: delay + stagger * (index + 1) },
//     children: children,
//   });
// };

// MotionText.displayName = 'Motion Text';
// MotionText.defaultProps = {
//   text: 'Hello World',
//   stagger: 0.05,
//   variant: true,
//   newTab: true,
//   tag: 'heading1',
//   effectOptions: { x: 0, y: 100, rotate: 0, rotateX: 0, rotateY: 0 },
//   transitionOptions: { type: 'spring', stiffness: 400, damping: 30, mass: 1, delay: 0.05 },
//   overflow: false,
//   font: {
//     font: 'Inter',
//     fontSize: 32,
//     fontWeight: 400,
//     textAlign: 'center',
//     lineHeight: 1.2,
//     lineHeightType: true,
//     lineHeightPixels: 100,
//     letterSpacing: 0,
//     offset: 0,
//     whiteSpace: 'nowrap',
//   },
// };
// /* Property Controls */ addPropertyControls(MotionText, {
//   text: {
//     type: ControlType.String,
//     title: 'Text',
//     defaultValue: 'Hello World',
//     displayTextArea: true,
//   },
//   type: {
//     title: 'Type',
//     type: ControlType.Enum,
//     options: ['letter', 'word', 'line'],
//     optionTitles: ['Letter', 'Word', 'Line'],
//     defaultValue: 'letter',
//   }, // link: { type: ControlType.Link, title: "Link" },
//   // newTab: { type: ControlType.Boolean, title: "New Tab", defaultValue: true },
//   perWord: {
//     type: ControlType.Boolean,
//     title: 'Per Word',
//     defaultValue: false,
//     hidden: (props) => props.type !== 'letter',
//   },
//   variant: {
//     title: 'Animate',
//     type: ControlType.Boolean,
//     defaultValue: true,
//     enabledTitle: 'In',
//     disabledTitle: 'Out',
//   },
//   overflow: {
//     title: 'Overflow',
//     type: ControlType.Boolean,
//     enabledTitle: 'Show',
//     disabledTitle: 'Hide',
//     defaultValue: false,
//   },
//   stagger: {
//     title: 'Stagger',
//     type: ControlType.Number,
//     step: 0.01,
//     defaultValue: 0.05,
//     displayStepper: true,
//   },
//   effectOptions: {
//     title: 'From',
//     type: ControlType.Object,
//     controls: {
//       opacity: {
//         title: 'Opacity',
//         type: ControlType.Number,
//         min: 0,
//         max: 1,
//         step: 0.01,
//         defaultValue: 0,
//       },
//       x: {
//         title: 'X',
//         type: ControlType.Number,
//         min: -200,
//         max: 200,
//         unit: '%',
//         step: 1,
//         defaultValue: 0,
//         displayStepper: true,
//       },
//       y: {
//         title: 'Y',
//         type: ControlType.Number,
//         min: -200,
//         max: 200,
//         unit: '%',
//         step: 1,
//         defaultValue: 100,
//         displayStepper: true,
//       },
//       scale: {
//         title: 'Scale',
//         type: ControlType.Number,
//         min: 0,
//         max: 5,
//         step: 0.01,
//         defaultValue: 1,
//         displayStepper: true,
//       },
//       rotate: {
//         title: 'Rotate',
//         type: ControlType.Number,
//         min: -360,
//         max: 360,
//         unit: '\xb0',
//         step: 1,
//         defaultValue: 0,
//       },
//       rotateX: {
//         title: 'Rotate X',
//         type: ControlType.Number,
//         min: -360,
//         max: 360,
//         unit: '\xb0',
//         step: 1,
//         defaultValue: 0,
//       },
//       rotateY: {
//         title: 'Rotate Y',
//         type: ControlType.Number,
//         min: -360,
//         max: 360,
//         unit: '\xb0',
//         step: 1,
//         defaultValue: 0,
//       },
//     },
//   },
//   transitionOptions: {
//     type: ControlType.Transition,
//     title: 'Transition',
//     defaultValue: { type: 'spring', stiffness: 400, damping: 30, mass: 1, delay: 0.05 },
//   },
//   color: { type: ControlType.Color, defaultValue: '#888' },
//   font: {
//     type: ControlType.Object,
//     controls: {
//       font: { type: ControlType.String, placeholder: 'Inter', defaultValue: 'Inter' },
//       fontSize: {
//         title: 'Size',
//         type: ControlType.Number,
//         min: 0,
//         max: 500,
//         step: 0.5,
//         defaultValue: 32,
//       },
//       fontWeight: {
//         type: ControlType.Enum,
//         options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//         defaultValue: 400,
//         title: 'Weight',
//       },
//       textAlign: {
//         type: ControlType.Enum,
//         displaySegmentedControl: true,
//         title: 'Align',
//         options: ['left', 'center', 'right'],
//         optionTitles: ['Left', 'Center', 'Right'],
//         defaultValue: 'center',
//       },
//       letterSpacing: {
//         title: 'Letter',
//         type: ControlType.Number,
//         defaultValue: 0,
//         step: 0.1,
//         displayStepper: true,
//       },
//       offset: {
//         type: ControlType.Number,
//         title: 'Offset',
//         min: -100,
//         max: 100,
//         displayStepper: true,
//         step: 0.25,
//         defaultValue: 0,
//         unit: '%',
//       },
//       whiteSpace: {
//         type: ControlType.Enum,
//         title: 'Space',
//         options: ['normal', 'nowrap', 'pre', 'pre-wrap', 'preline', 'break-spaces'],
//         optionTitles: ['Normal', 'No Wrap', 'Pre', 'Pre Wrap', 'Preline', 'Break Spaces'],
//         defaultValue: 'center',
//       },
//       lineHeight: {
//         type: ControlType.Number,
//         title: 'Line',
//         min: -500,
//         max: 500,
//         displayStepper: true,
//         step: 0.1,
//         defaultValue: 1.2,
//         hidden: (props) => !props.lineHeightType,
//       },
//       lineHeightPixels: {
//         type: ControlType.Number,
//         title: 'Line',
//         min: -500,
//         max: 500,
//         displayStepper: true,
//         step: 0.1,
//         defaultValue: 100,
//         hidden: (props) => props.lineHeightType,
//       },
//       lineHeightType: {
//         type: ControlType.Boolean,
//         title: ' ',
//         enabledTitle: 'em',
//         disabledTitle: 'px',
//         defaultValue: true,
//       },
//     },
//   },
// });

// export const __FramerMetadata__ = {
//   exports: {
//     default: {
//       type: 'reactComponent',
//       name: 'MotionText',
//       slots: [],
//       annotations: {
//         framerSupportedLayoutHeight: 'any',
//         framerContractVersion: '1',
//         framerIntrinsicHeight: '200',
//         framerDisableUnlink: '*',
//         framerSupportedLayoutWidth: 'fixed',
//         framerIntrinsicWidth: '200',
//       },
//     },
//     __FramerMetadata__: { type: 'variable' },
//   },
// };
// //# sourceMappingURL=./MotionText.map
