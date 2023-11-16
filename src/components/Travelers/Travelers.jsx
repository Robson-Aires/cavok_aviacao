import aerogrenocio from '../../assets/aeroagricola.jpg'
import taxi from '../../assets/taxi-aereo.jpg'
import treinamento from '../../assets/treinamento.jpg'
import manutencao from '../../assets/manutencao.webp'
import adm from '../../assets/adm.jpg'
import escola from '../../assets/escola.jpg'
import linha from '../../assets/linha-aerea.png'
import seguranca from '../../assets/seguranca.jpg'


import logo from '../../assets/logo.webp'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';



const travelers = [
  {
    id: 1,
    destinationImage: taxi,
    travelerImage: logo,
    travelerName: 'CAVOK',
    socialLink: 'Táxi aéreo',
    link: 'https://cavokaviacao.com/solucoes/taxi-aereo/'
  },
  {
    id: 2,
    destinationImage: seguranca,
    travelerImage: logo,
    travelerName: 'CAVOK',
    socialLink: 'Segurança pública',
    link: 'https://cavokaviacao.com/solucoes/seguranca-publica/'
  },
  {
    id: 3,
    destinationImage: manutencao,
    travelerImage: logo,
    travelerName: 'CAVOK',
    socialLink: (
      <div>
        oficina de <br /> Manutenção
      </div>
    ),
    link: 'https://cavokaviacao.com/solucoes/oficina-de-manutencao/'
  },
  {
    id: 4,
    destinationImage: adm,
    travelerImage: logo,
    travelerName: 'CAVOK',
    socialLink: 'Administração e Compartilhamento',
    link: 'https://cavokaviacao.com/solucoes/administracao-e-compartilhamento/'
  },
  {
    id: 5,
    destinationImage: aerogrenocio,
    travelerImage: logo,
    travelerName: 'CAVOK',
    socialLink: 'Aeroagrícola',
    link: 'https://cavokaviacao.com/solucoes/sistema-para-aeroagricolas/'
  },
  {
    id: 6,
    destinationImage: treinamento,
    travelerImage: logo,
    travelerName: 'CAVOK',
    socialLink: (
      <div>
        centro de <br /> treinamento
      </div>
    ),
    link: 'https://cavokaviacao.com/solucoes/centro-de-treinamento/'
  },
  {
    id: 7,
    destinationImage: escola,
    travelerImage: logo,
    travelerName: 'CAVOK',
    socialLink: 'Escola de Aviação',
    link: 'https://cavokaviacao.com/solucoes/escola-de-aviacao-civil/'
  },
  {
    id: 8,
    destinationImage: linha,
    travelerImage: logo,
    travelerName: 'CAVOK',
    socialLink: 'Linha Aérea',
    link: 'https://cavokaviacao.com/solucoes/linhas-aereas/'
  },
];


const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
      <div className="titlesDiv">
            <small>cavok aviação</small>
            <h2>Soluções completas</h2>
            <p>Funções integradas que facilitam as operações, aumentam o controle e a rastreabilidade das informações, reduzem custos, aumentam a capacidade produtiva, otimizam recursos humanos, integram sedes e bases operacionais, padronizam as atividades e procedimentos da empresa.</p>
          </div>
        {/* <h2 data-aos="fade-down" data-aos-duration="3500">
          Soluções completas
        </h2> */}

        <div
          data-aos="fade-up"
          data-aos-duration="3500"
          className="travelersContainer grid"
        >
          {travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink, link }) => {
            // Verifica se há um link
            const hasLink = link !== undefined && link !== null;

            // Componente que envolve a imagem e o conteúdo clicável
            const LinkComponent = hasLink ? 'a' : 'div';

            // Props para o componente clicável
            const linkProps = hasLink ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

            return (
              <div className="singleTraveler" key={id}>
                {/* Adiciona a tag <a> se houver um link */}
                <LinkComponent {...linkProps}>
                  <img src={destinationImage} className="destinationImage" alt="" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} alt="" className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      {/* Mantém o conteúdo original ou adiciona o link clicável */}
                      {hasLink ? <p>{socialLink}</p> : <p>{socialLink}</p>}
                    </div>
                  </div>
                </LinkComponent>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;