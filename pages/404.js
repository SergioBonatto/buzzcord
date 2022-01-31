import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from 'react';
import { useRouter } from 'next/router';

export default function PaginaDeErro(){
    return (
    <>
      
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.neutrals[600],
          backgroundImage:
            "url(https://media.giphy.com/media/TqxcgjbXsId4Qj3wIU/giphy.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundPosition: 'center',
          color: appConfig.theme.colors.neutrals[100],
          fontSize:'24px',
          textAlign: "center",
        }}
        >
            <h2>
                Parece que não há sinal de vida inteligente por aqui 🤨
            </h2>
        </Box>
    </>
    )
}