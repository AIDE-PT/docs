import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Monitorização Biotelemétrica em Tempo Real',
    icon: '📊',
    description: (
      <>
        Fornecer um fluxo constante e atualizado de dados de saúde (frequência cardíaca,
        níveis de glicémia, atividade física, etc.), permitindo que o cuidador esteja
        permanentemente a par do estado clínico da pessoa cuidada através do seu próprio
        dispositivo móvel.
      </>
    ),
  },
  {
    title: 'Mitigação da Distância Física',
    icon: '🌍',
    description: (
      <>
        Atuar como uma ponte digital que anula as barreiras geográficas. Este objetivo é
        crucial para cuidadores que não coabitam com a pessoa cuidada ou que, por motivos
        profissionais e pessoais, precisam de se ausentar, garantindo que a vigilância não
        é interrompida.
      </>
    ),
  },
  {
    title: 'Sistema Proativo de Alertas e Notificações',
    icon: '🔔',
    description: (
      <>
        Garantir que qualquer desvio nos padrões normais de saúde (como uma queda ou uma
        alteração súbita de sinais vitais) seja comunicado instantaneamente. Isto permite
        uma intervenção rápida e eficaz em situações de emergência, que de outra forma
        poderiam passar despercebidas.
      </>
    ),
  },
  {
    title: 'Promoção do Bem-Estar Emocional e Tranquilidade',
    icon: '💚',
    description: (
      <>
        Transmitir uma sensação de calma e controlo ao cuidador. Ao saber que será alertado
        em tempo real perante qualquer problema, o cuidador pode usufruir de uma vida
        quotidiana mais descansada, reduzindo os níveis de ansiedade e o sentimento de culpa
        associados à ausência física.
      </>
    ),
  },
  {
    title: 'Centralização da Informação Médica',
    icon: '📋',
    description: (
      <>
        Facilitar a comunicação com profissionais de saúde através do registo histórico de
        sintomas e eventos (Bullet Journal), transformando a aplicação numa ferramenta de
        apoio ao diagnóstico e ao acompanhamento médico a longo prazo.
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Introduction Section */}
        <div className={styles.introSection}>
          <Heading as="h2" className="text--center margin-bottom--lg">
            Objetivos do Serviço
          </Heading>
          <p className={clsx('text--center', styles.introText)}>
            O projeto <strong>AIDE</strong> foi desenvolvido com o propósito central de transformar a experiência
            do cuidar, focando-se na segurança de quem recebe os cuidados e na tranquilidade de
            quem os presta. Os objetivos da aplicação dividem-se entre a facilitação operacional do
            dia-a-dia e o apoio psicológico ao cuidador.
          </p>
        </div>

        {/* General Objective */}
        <div className={styles.generalObjective}>
          <Heading as="h3" className="text--center">
            Objetivo Geral
          </Heading>
          <p className="text--center">
            O objetivo primordial da AIDE é <strong>facilitar a vida dos cuidadores informais</strong>, oferecendo
            uma solução tecnológica que permita a monitorização remota e fidedigna das
            condições de saúde e segurança da pessoa cuidada. A aplicação visa colmatar o hiato
            de informação que existe quando o cuidador não está fisicamente presente,
            promovendo uma gestão de cuidados mais eficiente e menos desgastante.
          </p>
        </div>

        {/* Specific Objectives */}
        <div className="margin-top--xl">
          <Heading as="h3" className="text--center margin-bottom--lg">
            Objetivos Específicos
          </Heading>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
