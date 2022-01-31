import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from 'react';
import { useRouter } from 'next/router';


// componente React
function Titulo(props) {
  console.log(props.children);
  const Tag = props.tag || 'h1';
  return (
    <>
      <h1>{props.children}</h1>
      <style jsx>{`
        h1 {
          color: ${appConfig.theme.colors.neutrals["000"]};
        }
      `}</style>
    </>
  );
}

/* function HomePage() {
  // JSX
  return (
    <div>
      <GlobalStyle/>
      <Titulo>Ao infinito e além</Titulo>
      <h2>Isso não é voar, é cair, com estilo</h2>
    </div>
  );
} */
//export default HomePage;

export default function PaginaInicial() {
  //const username = "SergioBonatto";
  const [username, setUsername] = React.useState('SergioBonatto');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.neutrals[400],
          backgroundImage:
            "url(https://media.giphy.com/media/huAqJiUKwDATm/giphy.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundPosition: 'center',
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento){
              //console.log('alguém submeteu o form')
              infosDoEvento.preventDefault()
              //window.location.href = '/chat'
              roteamento.push('/chat');
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Ao infinito e além!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input 
              type="text"
              value= {username}
              onChange={function handler(event){
                console.log('usuario digitou: ', event.target.value)
                // onde tá o valor?
                const valor = event.target.value;
                // trocar o valor da variavel
                // através do react
                setUsername(valor);

              }}
              /> */}

            <TextField
              value= {username}
              onChange={function handler(event){
                console.log('usuario digitou: ', event.target.value)
                // onde tá o valor?
                const valor = event.target.value;
                // trocar o valor da variavel
                // através do react
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.primary[500],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}