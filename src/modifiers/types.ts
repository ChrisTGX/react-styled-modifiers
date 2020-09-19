import { DefaultTheme } from 'styled-components';

export type ModifierStyles<K extends string> = { [key in K]: string };

export type ModifierTheme = Required<DefaultTheme>;

export type MaskMap<K extends string> = {
    [key in keyof Partial<ModifierStyles<K>>]: boolean;
};

export type ModifierMask<T> = T extends (p: ModifierTheme) => ModifierStyles<infer K>
    ? MaskMap<K>
    : T extends string
    ? MaskMap<T>
    : never;
