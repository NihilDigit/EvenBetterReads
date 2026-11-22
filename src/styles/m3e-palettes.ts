export type ResolvedColorMode = 'light' | 'dark';
export type ColorMode = 'light' | 'dark' | 'system';

export type PaletteId =
  | 'terracotta'
  | 'amber'
  | 'sage'
  | 'teal'
  | 'ocean'
  | 'iris'
  | 'rose'
  | 'mono';

export interface M3PalettePreset {
  id: PaletteId;
  label: string;
  /** 标准 MD 四色圆圈色板象限色：[左上主色, 右上辅色容器, 左下第三色容器, 右下深色主调] */
  quadrants: [string, string, string, string];
}

export const M3_PALETTE_PRESETS: M3PalettePreset[] = [
  {
    id: 'terracotta',
    label: '赤陶',
    quadrants: ['#9A432A', '#FFDBD0', '#EFE0A6', '#6D3A2A']
  },
  {
    id: 'amber',
    label: '暖珀',
    quadrants: ['#825513', '#FFDEAD', '#D7E7B9', '#634417']
  },
  {
    id: 'sage',
    label: '青苔',
    quadrants: ['#3B6941', '#BCF0BE', '#BCEBF1', '#2B4F31']
  },
  {
    id: 'teal',
    label: '湖青',
    quadrants: ['#006874', '#9EEFFD', '#D6E3FF', '#004F58']
  },
  {
    id: 'ocean',
    label: '海蓝',
    quadrants: ['#365E9D', '#D6E3FF', '#E9DDFF', '#23467F']
  },
  {
    id: 'iris',
    label: '鸢尾',
    quadrants: ['#65558F', '#EADDFF', '#FFD8E4', '#4F378B']
  },
  {
    id: 'rose',
    label: '绛梅',
    quadrants: ['#8E4958', '#FFD9DF', '#FBDFA6', '#713342']
  },
  {
    id: 'mono',
    label: '素墨',
    quadrants: ['#383836', '#E4E2DD', '#CFCBC2', '#1C1C1A']
  }
];

export interface BookCoverTokens {
  coverBg: string;
  coverShapePrimary: string;
  coverShapeSecondary: string;
  coverShapeTertiary: string;
}

interface DualCoverPalette {
  light: BookCoverTokens;
  dark: BookCoverTokens;
}

const BOOK_COVER_PALETTES: Record<string, DualCoverPalette> = {
  'le-mythe-de-sisyphe': {
    light: {
      coverBg: '#F9DDD3',
      coverShapePrimary: '#9A3F26',
      coverShapeSecondary: '#D87A4A',
      coverShapeTertiary: '#F2C14E'
    },
    dark: {
      coverBg: '#3D1E15',
      coverShapePrimary: '#FF9D80',
      coverShapeSecondary: '#B85435',
      coverShapeTertiary: '#E8B84B'
    }
  },
  'la-nausee': {
    light: {
      coverBg: '#DDECD0',
      coverShapePrimary: '#3D5B27',
      coverShapeSecondary: '#86A86C',
      coverShapeTertiary: '#D99B26'
    },
    dark: {
      coverBg: '#23311A',
      coverShapePrimary: '#A8CF88',
      coverShapeSecondary: '#4B6B35',
      coverShapeTertiary: '#E5AE42'
    }
  },
  'was-ist-metaphysik': {
    light: {
      coverBg: '#DAE4F8',
      coverShapePrimary: '#2F4A76',
      coverShapeSecondary: '#7B96C4',
      coverShapeTertiary: '#F6F4EF'
    },
    dark: {
      coverBg: '#1C283D',
      coverShapePrimary: '#98B9F5',
      coverShapeSecondary: '#3E5B8C',
      coverShapeTertiary: '#131312'
    }
  },
  'zur-genealogie-der-moral': {
    light: {
      coverBg: '#F8DCE1',
      coverShapePrimary: '#86293C',
      coverShapeSecondary: '#C96B7C',
      coverShapeTertiary: '#C98A3B'
    },
    dark: {
      coverBg: '#3A1921',
      coverShapePrimary: '#FF9EAE',
      coverShapeSecondary: '#9E3D50',
      coverShapeTertiary: '#E2A557'
    }
  },
  'protestantische-ethik': {
    light: {
      coverBg: '#D4ECF5',
      coverShapePrimary: '#1E5869',
      coverShapeSecondary: '#689EAE',
      coverShapeTertiary: '#D69A3A'
    },
    dark: {
      coverBg: '#182F37',
      coverShapePrimary: '#8BCEE0',
      coverShapeSecondary: '#316A7B',
      coverShapeTertiary: '#E7B054'
    }
  },
  'common-sense': {
    light: {
      coverBg: '#DAE4FA',
      coverShapePrimary: '#244E84',
      coverShapeSecondary: '#7395C7',
      coverShapeTertiary: '#D15238'
    },
    dark: {
      coverBg: '#1A2942',
      coverShapePrimary: '#9EC0FF',
      coverShapeSecondary: '#376199',
      coverShapeTertiary: '#F0755B'
    }
  },
  'les-villes-du-moyen-age': {
    light: {
      coverBg: '#F7E2C8',
      coverShapePrimary: '#7B4E14',
      coverShapeSecondary: '#C8924E',
      coverShapeTertiary: '#B54B35'
    },
    dark: {
      coverBg: '#382612',
      coverShapePrimary: '#F5B86E',
      coverShapeSecondary: '#996626',
      coverShapeTertiary: '#DF6E57'
    }
  },
  'bartleby-the-scrivener': {
    light: {
      coverBg: '#D4EAE1',
      coverShapePrimary: '#31594D',
      coverShapeSecondary: '#76A194',
      coverShapeTertiary: '#F5F3EC'
    },
    dark: {
      coverBg: '#1B2F29',
      coverShapePrimary: '#9CCBB9',
      coverShapeSecondary: '#3E6E61',
      coverShapeTertiary: '#E8E4DA'
    }
  },
  'ce-qu-on-voit': {
    light: {
      coverBg: '#CEEFEF',
      coverShapePrimary: '#175A62',
      coverShapeSecondary: '#66ACB4',
      coverShapeTertiary: '#DDA14B'
    },
    dark: {
      coverBg: '#163135',
      coverShapePrimary: '#86CED7',
      coverShapeSecondary: '#2C727B',
      coverShapeTertiary: '#ECB362'
    }
  },
  'political-discourses': {
    light: {
      coverBg: '#D4EFE0',
      coverShapePrimary: '#255B3F',
      coverShapeSecondary: '#6EA888',
      coverShapeTertiary: '#CEA03D'
    },
    dark: {
      coverBg: '#193225',
      coverShapePrimary: '#94D1AE',
      coverShapeSecondary: '#356E50',
      coverShapeTertiary: '#E4B856'
    }
  },
  'achtzehnte-brumaire': {
    light: {
      coverBg: '#F5DCEB',
      coverShapePrimary: '#70345B',
      coverShapeSecondary: '#BA76A0',
      coverShapeTertiary: '#C95A3E'
    },
    dark: {
      coverBg: '#341B2B',
      coverShapePrimary: '#EAA5CE',
      coverShapeSecondary: '#8A4872',
      coverShapeTertiary: '#EA785B'
    }
  },
  'zapiski-iz-podpolya': {
    light: {
      coverBg: '#F3DFD1',
      coverShapePrimary: '#6D4123',
      coverShapeSecondary: '#B58362',
      coverShapeTertiary: '#D9B63E'
    },
    dark: {
      coverBg: '#332014',
      coverShapePrimary: '#EEA97A',
      coverShapeSecondary: '#855535',
      coverShapeTertiary: '#E8C958'
    }
  },
  'vies-imaginaires': {
    light: {
      coverBg: '#E8DCF8',
      coverShapePrimary: '#593D7C',
      coverShapeSecondary: '#9D83BF',
      coverShapeTertiary: '#C96482'
    },
    dark: {
      coverBg: '#2A1E3B',
      coverShapePrimary: '#CFBDFE',
      coverShapeSecondary: '#6F5594',
      coverShapeTertiary: '#E883A0'
    }
  },
  'beim-bau-der-chinesischen-mauer': {
    light: {
      coverBg: '#F4E1D2',
      coverShapePrimary: '#734926',
      coverShapeSecondary: '#BD8D67',
      coverShapeTertiary: '#3C6E73'
    },
    dark: {
      coverBg: '#342214',
      coverShapePrimary: '#F0B384',
      coverShapeSecondary: '#8E5F3B',
      coverShapeTertiary: '#77B2B8'
    }
  },
  'existentialisme-est-un-humanisme': {
    light: {
      coverBg: '#E4E1FA',
      coverShapePrimary: '#36397A',
      coverShapeSecondary: '#7D82C4',
      coverShapeTertiary: '#D9822B'
    },
    dark: {
      coverBg: '#202142',
      coverShapePrimary: '#B8BCFF',
      coverShapeSecondary: '#4B4F94',
      coverShapeTertiary: '#F29D49'
    }
  },
  'l-iliade-ou-le-poeme-de-la-force': {
    light: {
      coverBg: '#F6E6CE',
      coverShapePrimary: '#6E3B1E',
      coverShapeSecondary: '#BA8154',
      coverShapeTertiary: '#2F5D73'
    },
    dark: {
      coverBg: '#331F12',
      coverShapePrimary: '#F2B488',
      coverShapeSecondary: '#8C5432',
      coverShapeTertiary: '#7CB3CC'
    }
  },
  'introduction-to-mathematical-philosophy': {
    light: {
      coverBg: '#D8EEFB',
      coverShapePrimary: '#1A4E6E',
      coverShapeSecondary: '#659EC2',
      coverShapeTertiary: '#D6982C'
    },
    dark: {
      coverBg: '#152B3B',
      coverShapePrimary: '#8CC9F2',
      coverShapeSecondary: '#2D678A',
      coverShapeTertiary: '#EEB34B'
    }
  },
  'la-science-et-l-hypothese': {
    light: {
      coverBg: '#D6F0E8',
      coverShapePrimary: '#195749',
      coverShapeSecondary: '#63A897',
      coverShapeTertiary: '#CF5C47'
    },
    dark: {
      coverBg: '#142F28',
      coverShapePrimary: '#8AD4C1',
      coverShapeSecondary: '#2B6E5F',
      coverShapeTertiary: '#ED7B66'
    }
  },
  'rashomon-short-stories': {
    light: {
      coverBg: '#F6DDD8',
      coverShapePrimary: '#7C231D',
      coverShapeSecondary: '#5E4B52',
      coverShapeTertiary: '#DE8628'
    },
    dark: {
      coverBg: '#2E1615',
      coverShapePrimary: '#F59B92',
      coverShapeSecondary: '#8C747D',
      coverShapeTertiary: '#F6B156'
    }
  },
  'sidereus-nuncius': {
    light: {
      coverBg: '#DCE5FA',
      coverShapePrimary: '#1D356B',
      coverShapeSecondary: '#6F88C2',
      coverShapeTertiary: '#DCA02E'
    },
    dark: {
      coverBg: '#15203D',
      coverShapePrimary: '#9DB6F8',
      coverShapeSecondary: '#39528C',
      coverShapeTertiary: '#F5BE52'
    }
  },
  'el-coloquio-de-los-perros': {
    light: {
      coverBg: '#F7E9CE',
      coverShapePrimary: '#5E421B',
      coverShapeSecondary: '#A88451',
      coverShapeTertiary: '#C94E38'
    },
    dark: {
      coverBg: '#302311',
      coverShapePrimary: '#EFC084',
      coverShapeSecondary: '#7D5D30',
      coverShapeTertiary: '#EC7660'
    }
  },
  'a-room-of-ones-own': {
    light: {
      coverBg: '#E4F0E2',
      coverShapePrimary: '#2D5940',
      coverShapeSecondary: '#8696C7',
      coverShapeTertiary: '#D99B26'
    },
    dark: {
      coverBg: '#192E22',
      coverShapePrimary: '#98D4AF',
      coverShapeSecondary: '#586799',
      coverShapeTertiary: '#F2B84B'
    }
  },
  'theory-of-the-leisure-class': {
    light: {
      coverBg: '#F5ECD4',
      coverShapePrimary: '#1E4F46',
      coverShapeSecondary: '#789E96',
      coverShapeTertiary: '#C98A1E'
    },
    dark: {
      coverBg: '#2B2413',
      coverShapePrimary: '#89CFC1',
      coverShapeSecondary: '#396B61',
      coverShapeTertiary: '#EDAF3E'
    }
  }
};

export function getBookCoverTokens(
  slug: string,
  mode: ResolvedColorMode = 'light'
): BookCoverTokens {
  const entry = BOOK_COVER_PALETTES[slug] ?? BOOK_COVER_PALETTES['le-mythe-de-sisyphe'];
  return mode === 'dark' ? entry.dark : entry.light;
}
