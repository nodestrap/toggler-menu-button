/// <reference types="react" />
import type { PropEx } from '@cssfn/css-types';
import { ThemeName } from '@nodestrap/basic';
import { CheckProps } from '@nodestrap/check';
export declare const markActive: () => import("@cssfn/cssfn").StyleCollection;
export declare const usesThemeDefault: (themeName?: ThemeName | null) => import("@cssfn/cssfn").StyleCollection;
export declare const usesThemeActive: (themeName?: ThemeName | null) => import("@cssfn/cssfn").StyleCollection;
export interface SvgAnimVars {
    topTransfIn: any;
    midTransfIn: any;
    btmTransfIn: any;
    topTransfOut: any;
    midTransfOut: any;
    btmTransfOut: any;
    /**
     * final transform for the svg top.
     */
    topTransf: any;
    /**
     * final transform for the svg middle.
     */
    midTransf: any;
    /**
     * final transform for the svg bottom.
     */
    btmTransf: any;
    /**
     * final animation for the svg top.
     */
    topAnim: any;
    /**
     * final animation for the svg middle.
     */
    midAnim: any;
    /**
     * final animation for the svg bottom.
     */
    btmAnim: any;
}
export declare const usesSvgAnim: () => readonly [() => import("@cssfn/cssfn").StyleCollection, import("@cssfn/css-var").ReadonlyRefs<SvgAnimVars>, import("@cssfn/css-var").ReadonlyDecls<SvgAnimVars>];
export declare const usesSvgLayout: () => import("@cssfn/cssfn").StyleCollection;
export declare const usesTogglerMenuButtonLayout: () => import("@cssfn/cssfn").StyleCollection;
export declare const usesTogglerMenuButtonVariants: () => import("@cssfn/cssfn").StyleCollection;
export declare const usesTogglerMenuButtonStates: () => import("@cssfn/cssfn").StyleCollection;
export declare const useTogglerMenuButtonSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    svgTopTransfIn: string[][];
    svgMidTransfIn: string[][];
    svgBtmTransfIn: string[][];
    svgTopTransfOut: string[][];
    svgMidTransfOut: string[][];
    svgBtmTransfOut: string[][];
    '@keyframes svgTopIn': PropEx.Keyframes;
    '@keyframes svgMidIn': PropEx.Keyframes;
    '@keyframes svgBtmIn': PropEx.Keyframes;
    '@keyframes svgTopOut': PropEx.Keyframes;
    '@keyframes svgMidOut': PropEx.Keyframes;
    '@keyframes svgBtmOut': PropEx.Keyframes;
    svgAnimDuration: string;
    svgTopAnimIn: (string | PropEx.Keyframes)[][];
    svgMidAnimIn: (string | PropEx.Keyframes)[][];
    svgBtmAnimIn: (string | PropEx.Keyframes)[][];
    svgTopAnimOut: (string | PropEx.Keyframes)[][];
    svgMidAnimOut: (string | PropEx.Keyframes)[][];
    svgBtmAnimOut: (string | PropEx.Keyframes)[][];
    animActive: string[][];
    animPassive: string[][];
}>, cssDecls: import("@cssfn/css-config").Decls<{
    svgTopTransfIn: string[][];
    svgMidTransfIn: string[][];
    svgBtmTransfIn: string[][];
    svgTopTransfOut: string[][];
    svgMidTransfOut: string[][];
    svgBtmTransfOut: string[][];
    '@keyframes svgTopIn': PropEx.Keyframes;
    '@keyframes svgMidIn': PropEx.Keyframes;
    '@keyframes svgBtmIn': PropEx.Keyframes;
    '@keyframes svgTopOut': PropEx.Keyframes;
    '@keyframes svgMidOut': PropEx.Keyframes;
    '@keyframes svgBtmOut': PropEx.Keyframes;
    svgAnimDuration: string;
    svgTopAnimIn: (string | PropEx.Keyframes)[][];
    svgMidAnimIn: (string | PropEx.Keyframes)[][];
    svgBtmAnimIn: (string | PropEx.Keyframes)[][];
    svgTopAnimOut: (string | PropEx.Keyframes)[][];
    svgMidAnimOut: (string | PropEx.Keyframes)[][];
    svgBtmAnimOut: (string | PropEx.Keyframes)[][];
    animActive: string[][];
    animPassive: string[][];
}>, cssVals: import("@cssfn/css-config").Vals<{
    svgTopTransfIn: string[][];
    svgMidTransfIn: string[][];
    svgBtmTransfIn: string[][];
    svgTopTransfOut: string[][];
    svgMidTransfOut: string[][];
    svgBtmTransfOut: string[][];
    '@keyframes svgTopIn': PropEx.Keyframes;
    '@keyframes svgMidIn': PropEx.Keyframes;
    '@keyframes svgBtmIn': PropEx.Keyframes;
    '@keyframes svgTopOut': PropEx.Keyframes;
    '@keyframes svgMidOut': PropEx.Keyframes;
    '@keyframes svgBtmOut': PropEx.Keyframes;
    svgAnimDuration: string;
    svgTopAnimIn: (string | PropEx.Keyframes)[][];
    svgMidAnimIn: (string | PropEx.Keyframes)[][];
    svgBtmAnimIn: (string | PropEx.Keyframes)[][];
    svgTopAnimOut: (string | PropEx.Keyframes)[][];
    svgMidAnimOut: (string | PropEx.Keyframes)[][];
    svgBtmAnimOut: (string | PropEx.Keyframes)[][];
    animActive: string[][];
    animPassive: string[][];
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface TogglerMenuButtonProps extends CheckProps {
}
export declare function TogglerMenuButton(props: TogglerMenuButtonProps): JSX.Element;
export declare namespace TogglerMenuButton {
    var prototype: any;
}
export { TogglerMenuButton as default };
