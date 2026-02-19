import '@testing-library/jest-dom';

jest.mock(
  'swiper/react',
  () => ({
    Swiper: ({ children }) => children,
    SwiperSlide: ({ children }) => children,
  }),
  { virtual: true }
);

jest.mock(
  'swiper/modules',
  () => ({
    Autoplay: {},
    Navigation: {},
    Pagination: {},
  }),
  { virtual: true }
);

jest.mock('swiper/css', () => ({}), { virtual: true });
jest.mock('swiper/css/pagination', () => ({}), { virtual: true });
jest.mock('swiper/css/navigation', () => ({}), { virtual: true });
