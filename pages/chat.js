import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzMzEwMSwiZXhwIjoxOTU4OTA5MTAxfQ.2weBL3PPoaJKi9241qeBwiGiuXidWq-rmiHEFxQ9uwk";
const SUPABASE_URL = "https://dpbbkfjpjvjhttebqdgh.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function ChatPage() {
  // Sua lógica vai aqui

  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

  

  React.useEffect(() => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order('id', {ascending: false})
      .then(({data}) => {
        console.log("Dados da consulta: ", data);
        setListaDeMensagens(data);
      });
  }, []);

  /* Usuário

     - usuário digita no campo textarea;
     - aperta Enter para enviar;
     - tem que adicionar o texto na listagem. 
    */

  /* Dev

     - [X] Campo textarea criado;
     - [ ] Vamos usar o onChange e o useState (ter if pra caso seja enter pra limpar a variagel);
     - [ ] Atualizar a lista de mensagens.
      */

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: MessageList.length + 1,
      de: "SergioBonatto",
      texto: novaMensagem,
    };
    setListaDeMensagens([mensagem, ...listaDeMensagens]);
    setMensagem("");
  }
  // ./Sua lógica vai aqui
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.neutrals["000"],
        backgroundImage: `url(https://img.elo7.com.br/product/main/1F5C183/adesivo-nuvem-do-toy-story-adesivo-nuven-toy-story.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          {/* ta mudando o valor? {mensagem} */}

          <MessageList mensagens={listaDeMensagens} />
          {/*  {listaDeMensagens.map((mensagemAtual) => {
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>
                        )

                    })} */}

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  console.log(event);
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "14px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
              type="submit"
              //onSubmit={(handleNovaMensagem(mensagem))}
              colorVariant="dark"
              label="🚀"
              styleSheet={{
                marginBottom: "8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                borderRadius: "10%",
                width: "63px",
                height: "63px",
              }}
            >
              🚀
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  console.log(props.listaDeMensagens);
  return (
    <Box
      tag="ul"
      styleSheet={{
        //overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
            <Text
                key={mensagem.id}
                tag="li"
                styleSheet={{
                borderRadius: "5px",
                padding: '6px',
                marginBottom: '12px',
                hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                },
                }}
            >
                <Box
                styleSheet={{
                    marginBottom: "8px",
                }}
                >
                <Image
                    styleSheet={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "8px",
                    marginBottom: "-25px",
                    hover: {
                      width:'50px',
                      height:'50px',
                      borderRadius:'12%'
                    }
                    }}
                    src={`https://github.com/${mensagem.de}.png`}
                />
                <Text
                    tag="strong"
                    styleSheet={{
                      marginLeft:'42px'
                    }}
                >
                    {mensagem.de}
                </Text>
                <Text
                    styleSheet={{
                    fontSize: "10px",
                    marginLeft: "84px",
                    color: appConfig.theme.colors.neutrals[300],
                    //marginTop: "-13px",
                    }}
                    tag="span"
                >
                    {new Date().toLocaleDateString()}
                </Text>
                </Box>
                {mensagem.texto}
            </Text>
        );
        })}
    </Box>
  );
}
