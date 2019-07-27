export default {
    app: {
        token: "fb1cf983ae344389813402fcb84a13d0", // <- enter your token here
        muted: false, // <- mute microphone by default
        googleIt: true // <- ask users to google their request, in case of input.unknown action
    },
    locale: {
        strings: {
            welcomeTitle: "Di, algo en ingles",
            welcomeDescription: `Puedes decir "hello" para empezar `,
            offlineTitle: "Oh, no!",
            offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
            queryTitle: "Cuentame de ti...",
            voiceTitle: "Dale, te estoy escuchando"
        },
        settings: {
            speechLang: "en-GB", // <- output language
            recognitionLang: "en-US" // <- input(recognition) language
        }
    }
}