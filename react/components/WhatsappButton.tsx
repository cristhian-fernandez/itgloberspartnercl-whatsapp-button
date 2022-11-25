import React from 'react';
import PropTypes from 'prop-types';

type Props = {          // El nombre de objeto puede cambiar
    logo: string        // logo_whatsapp.png
    phone: string       // 974520030
    message: string     // "Estas comunicandote con Vtex, por favor ingresa tu duda..."
    width: number       // 80px
    height: number      // 80px
}
// const WhatsappButton = () => <h1>Aquí irá el botón de Whatsapp Importante 2</h1>

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20");
    console.log('logo:::', logo);
    return <div className='fixed bottom-2 right-2 flex flexColum'>
        <a
            href={`https://wa.me/${phone}?text=${formattedMessage}`}
            target="_blank"
            rel="noreferrer noopener"
        >
            <img src={logo} width={width} height={height} alt="Logo de Whatsapp Componente" />
        </a>
    </div>
}

WhatsappButton.PropTypes = {        // Propiedades del boton de whatsapp
    logo: PropTypes.string.isRequired,          // logo sera de tipo string y sera requerida
    phone: PropTypes.string.isRequired,         // phone sera de tipo string y sera requerida
    message: PropTypes.string,                  // message sera de tipo string y no sera requerida
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "976543210",
    message: "Estas comunicandote con Vtex, por favor ingresa tu duda...",
    width: 40,
    height: 40
}

WhatsappButton.schema = {           // Para crear como una interfaz en /admin/cms/pages/
    title: "Botón de WhatsApp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de WhatsApp (relacione con la marca)",
            type: "string",
            widget: {               // Interfaces de usuarios
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Telefono",
            description: "Agrege por favor el número de telefono",
            type: "string"
        },
        message: {
            title: "Mensaje (que veraá el cliente)",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Ancho",
            description: "Ancho de la imagen",
            type: "number"
        },
        height: {
            title: "Altura",
            description: "Altura de la imagen",
            type: "number"
        }
    }
}

export default WhatsappButton;