import Content from '../components/Content/Content'
import Text from '../languages/language'

export default function About() {
    return (
        <Content id='about'>
            {Text("about", "pt-br")}
        </Content>
    )
}