module.exports = {
    content: ["./public/*.html"],
    theme: {
      extend: {
        gradientColorStops:{
          orange:'#F99500',
          purple1:'#6c63ff',
          puprle2: '#675ff4'
        },
        textColor:{
          purple:'#6860f5',
          red:'#fd4323'
        },
        borderColor:{
          purple:'#6860f5',
        },
        boxShadow:{
          card: "0px 4px 30px -1px rgba(0,0,0,0.07)"
        },
      },
    },
    plugins: [],
  }