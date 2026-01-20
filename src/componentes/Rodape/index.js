import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="footer">
            {/* <img src="/imagens/fundo.png" alt="Fundo com formas"/> */}
            <section className='social'>
                <img src="/imagens/fb.png" alt="Logo do Facebook"/>
                <img src="/imagens/tw.png" alt="Logo do Twitter"/>
                <img src="/imagens/ig.png" alt="Logo do Instagram"/>
            </section>

            <section>
                <img src="/imagens/logo.png" alt="Logo da Organo"/>
            </section>

            <section>
                <h4>Desenvolvido por Alura</h4>
            </section>
        </footer>
    )
}

export default Rodape;