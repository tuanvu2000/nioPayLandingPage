tailwind.config = {
    theme: {
        colors: {
            black: '#1E1E1E',
            white: '#FFFFFF'
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serfi'],
                header: ['Syne', 'sans-serfi']
            },
            fontSize: {
                logo: ['2.75rem', 1],
                '2xl-5': ['1.5rem', '2.25rem'],
                '2xl-15': ['1.5rem', '4.5rem'],
                '3xl-1': ['2rem', 1],
                '3xl-5': ['2rem', '3rem'],
                '7xl-5': ['5.25rem', 1]
            },
            colors: {
                black: '#1E1E1E',
                primary: '#623FF0',
                secondary: '#FDB242',
                secondary2: '#E74EF4',
                secondary3: '#FF2C78',
                'primary-light': '#999DFD',
                'secondary-light': '#FFF389',
                'secondary2-light': '#EE87F7',
                'secondary3-light': '#FF80AE',
                success: '#4BDB4B',
                error: '#FF4D4D',
                'icon-1': '#623FF0',
                'icon-2': '#E74EF4',
                'icon-3': '#639AFF',
                'icon-4': '#4BDB4B',
                'icon-5': '#B643EC',
                'icon-6': '#F8BA43'
            },
            borderRadius: {
                '4xl': '2rem'
            },
            boxShadow: {
                custom: '0px 4px 8px rgba(30, 30, 30, 0.1)',
                'custom-hover': '0px 4px 8px rgba(30, 30, 30, 0.3)'
            },
            minWidth: {
                40: '40px'
            },
            width: {
                21: '5.25rem'
            },
            height: {
                18: '4.5rem',
                21: '5.25rem'
            },
            maxHeight: {
                18: '4.5rem'
            },
            lineHeight: {
                0.5: '0.125rem',
                18: '4.5rem'
            },
            gap: {
                21: '5.25rem'
            }
        },
        screens: {
            '2xl': { max: '1535px' },
            xl: { max: '1279px' },
            lg: { max: '1023px' },
            md: { max: '767px' },
            sm: { max: '639px' }
        }
    }
};
