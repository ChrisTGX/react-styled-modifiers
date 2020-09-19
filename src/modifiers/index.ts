import { values, pickBy } from 'lodash';
import { ModifierMask, ModifierStyles, ModifierTheme } from './types';

export const withModifier = <T extends string>(styles: (p: ModifierTheme) => ModifierStyles<T>) => ({
    theme,
    ...modifiers
}: ModifierTheme & ModifierMask<T>) =>
    values(pickBy(styles({ theme }), (_, key: keyof typeof modifiers) => modifiers[key])).join('');
