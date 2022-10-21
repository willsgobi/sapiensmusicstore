type Culture = "pt-br" | "en-us" | "es-es"

export default function Text(text: string, culture: Culture) {

    const culturesTexts = {
        "pt-br": {
            "about": `Este é um site desenvolvido por mim com o intuito de obter mais conhecimento com a linguagem NextJS e também deixar um site bem útil como portifólio e futuros projetos que venho a desenvolver.\
            Apaixonado por tecnologia e música, resolvi criar esta vitrine virtual de uma loja de música.\
            Agradeço o interesse em conhecer meu site!Este é um site desenvolvido por mim com o intuito de obter mais conhecimento com a linguagem NextJS e também deixar um site bem útil como portifólio e futuros projetos que venho a desenvolver.\
            Apaixonado por tecnologia e música, resolvi criar esta vitrine virtual de uma loja de música.\
            Agradeço o interesse em conhecer meu site!\
            Maecenas porta risus diam, sed pellentesque nisi egestas eget. Nullam eu tortor lectus. Ut vehicula purus eget aliquet consectetur. Mauris ornare nunc a cursus commodo. Donec tempor scelerisque sapien sit amet auctor. Pellentesque in fringilla metus, ut malesuada dolor.\
            Fusce elementum at orci quis gravida. Morbi fermentum tortor sit amet metus varius hendrerit. Sed finibus, urna in ultricies scelerisque, est neque euismod urna, nec varius magna purus et nibh. \
            Pellentesque tortor lorem, tincidunt at pharetra eget, rhoncus quis enim. Donec eleifend, metus ac vulputate ullamcorper, lacus lacus auctor eros, quis accumsan tellus lorem sit amet lectus. Nulla fermentum, est sed tempor scelerisque, arcu erat egestas lectus, eget bibendum mi nunc nec neque. Phasellus sit amet mollis arcu, venenatis eleifend metus. Vivamus varius purus a volutpat consequat. Donec et interdum nulla.`,
            "placeholder_name": "Digite seu nome",
            "placeholder_email": "Digite seu email",
            "placeholder_subject": "Digite o assunto",
            "placeholder_message": "Digite sua mensagem",
        },
        "en-us": {
            "about": `This is a site developed by me in order to get more knowledge with the NextJS language and also to leave a very useful site as a portfolio and future projects that I have been developing.            
            Passionate about technology and music, I decided to create this virtual showcase for a music store.            
            Thank you for your interest in knowing my site! This is a site developed by me in order to get more knowledge with the NextJS language and also to leave a very useful site as a portfolio and future projects that I come to develop.            
            Passionate about technology and music, I decided to create this virtual showcase for a music store.            
            Thank you for your interest in visiting my site!            
            Maecenas porta risus diam, sed pellentesque nisi egestas eget. Nullam eu tortor lectus. Ut vehicula purus eget aliquet consectetur. Mauris ornare nunc a cursus commodo. Donec tempor scelerisque sapien sit amet auctor. Pellentesque in fringilla metus, ut malesuada dolor.             
            Fusce elementum at orci quis gravida. Morbi fermentum tortor sit amet metus varius hendrerit. Sed finibus, urna in ultricies scelerisque, est neque euismod urna, nec varius magna purus et nibh. Pellentesque tortor lorem, tincidunt at pharetra eget, rhoncus quis enim.             
            Donec eleifend, metus ac vulputate ullamcorper, lacus lacus auctor eros, quis accumsan tellus lorem sit amet lectus. Nulla fermentum, est sed tempor scelerisque, arcu erat egestas lectus, eget bibendum mi nunc nec neque. Phasellus sit amet mollis arcu, venenatis eleifend metus. Vivamus varius purus a volutpat consequat. Donec et interdum nulla.`,
            "placeholder_name": "Digite seu nome",
            "placeholder_email": "Digite seu email",
            "placeholder_subject": "Digite o assunto",
            "placeholder_message": "Digite sua mensagem",
        },
        "es-es": {
            "about": `Este es un sitio web desarrollado por mí con el fin de obtener más conocimiento con el lenguaje NextJS y también para dejar un sitio web muy útil como cartera y proyectos futuros que he estado desarrollando.            
            Apasionado por la tecnología y la música, decidí crear este escaparate virtual para una tienda de música.            
            ¡Gracias por su interés en conocer mi sitio web!, este es un sitio web desarrollado por mí con el fin de obtener más conocimiento con el lenguaje NextJS y también para dejar un sitio web muy útil como cartera y proyectos futuros que vengo a desarrollar.            
            Apasionado por la tecnología y la música, decidí crear este escaparate virtual para una tienda de música.            
            ¡Gracias por su interés en visitar mi sitio web!            
            Maecenas porta risus diam, sed pellentesque nisi egestas eget. Nullam eu tortor lectus. Ut vehicula purus eget aliquet consectetur. Mauris ornare nunc a cursus commodo. Donec tempor scelerisque sapien sit amet auctor. Pellentesque in fringilla metus, ut malesuada dolor.             
            Fusce elementum at orci quis gravida. Morbi fermentum tortor sit amet metus varius hendrerit. Sed finibus, urna in ultricies scelerisque, est neque euismod urna, nec varius magna purus et nibh. Pellentesque tortor lorem, tincidunt at pharetra eget, rhoncus quis enim.             
            Donec eleifend, metus ac vulputate ullamcorper, lacus lacus auctor eros, quis accumsan tellus lorem sit amet lectus. Nulla fermentum, est sed tempor scelerisque, arcu erat egestas lectus, eget bibendum mi nunc nec neque. Phasellus sit amet mollis arcu, venenatis eleifend metus. Vivamus varius purus a volutpat consequat. Donec et interdum nulla.`,
            "placeholder_name": "Digite seu nome",
            "placeholder_email": "Digite seu email",
            "placeholder_subject": "Digite o assunto",
            "placeholder_message": "Digite sua mensagem",
        }
    }
        
    return culturesTexts[culture][text]
}