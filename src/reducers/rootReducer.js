import { getRandomKey } from '../utils';
import {
  initPageConfig,
  createPictureBrick,
} from '../utils/createConfigUtils';

// import { initialStore } from '../constants';

const rootReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_PRESET_SECTION_LABEL':
      return {
        ...state,
        settings: {
          ...state.settings,
          sectionsPreset: {
            [action.key]: {
              ...state.settings.sectionsPreset[action.key],
              sectionLabel: action.value,
            }
          }
        }
      };

    case 'CLEAN_PAGE_FIELDS':
      return {
        ...state,
        fieldsData: {
          ...state.fieldsData,
          [state.currentPageKey]: {
            ...state.currentPageKey,
            fields: {},
          },
        }
      };

    case 'SET_FIELD_KEY_COUNTER':
      return {
        ...state,
        fieldKeyCounter: action.value || state.fieldKeyCounter + 1,
      };

    case 'CREATE_PAGE_FIELD':
      const randomKey = getRandomKey();
      return {
        ...state,
        fieldsData: {
          ...state.fieldsData,
          ...initPageConfig({
            pageTitle: 'About page',
            key: randomKey,
          }),
        },
        currentPageKey: randomKey,
      };

    case 'CREATE_PICTURE_BRICK_FIELD':
      return {
        ...state,
        fieldsData: {
          ...state.fieldsData,
          ...createPictureBrick(state.pictureBrickFieldKey),
        },
      };

    default: return state;
  }
};

export default rootReducer;