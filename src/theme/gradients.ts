interface ThemeGradient {
    background: string
    icon: string
    skills: string
}

const gradients: ThemeGradient[] = [
    {
        background:
            'linear-gradient(-45deg, rgba(216,181,255,1) 0%, rgba(30,174,152,1) 100%)',
        icon: 'linear-gradient(-45deg, rgba(216,181,255,1) 0%, rgba(30,174,152,1) 100%)',
        skills: 'linear-gradient(-45deg, rgba(216,181,255,1) 0%, rgba(30,174,152,1) 100%)',
    },
    {
        background:
            'linear-gradient(-45deg, rgba(76,26,87,1) 0%, rgba(82,170,255,1) 170%)',
        icon: 'linear-gradient(-45deg, rgba(76,26,87,1) 0%, rgba(82,170,255,1) 90%)',
        skills: 'linear-gradient(-45deg, rgba(76,26,87,1) 0%, rgba(82,170,255,1) 100%)',
    },
    {
        background:
            'linear-gradient(-45deg, rgba(30,174,152,1) 0%, rgba(82,170,255,1) 170%)',
        icon: 'linear-gradient(-45deg, rgba(30,174,152,1) 0%, rgba(82,170,255,1) 100%)',
        skills: 'linear-gradient(-90deg, rgba(30,174,152,1) 0%, rgba(82,170,255,1) 100%)',
    },
]

export const mainGradient = gradients[1]
