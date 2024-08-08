import { useContext, createContext } from 'react';

export const Context = () => {
    return (
        <Section>
            <Heading>主标题</Heading>
            <Section>
                <Heading>副标题</Heading>
                <Section>
                    <Heading>子标题</Heading>
                    <Section>
                        <Heading>子子标题</Heading>
                        <Heading>子子标题</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    )
}

const LevelContext = createContext(1);

const Heading = ({ children }) => {
    const level = useContext(LevelContext);
    console.log("heading level:", level);
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('未知的 level:' + level);
    }
}

const Section = ({ children }) => {
    const level = useContext(LevelContext);
    console.log("section level:", level);
    return (
        <section style={{
            "padding": "2px",
            "margin": "5px",
            "borderRadius": "2px",
            "border": "1 solid #aaa"
        }}>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}