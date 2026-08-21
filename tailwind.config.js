
export default {
  theme: {
    extend: {
      animation: {
        'scroll-dot': 'scrollDot 1.5s ease-in-out infinite',
      },
      keyframes: {
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
      },
    },
  },
}