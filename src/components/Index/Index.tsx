import Banner from "../Banner/Banner";
import CardsProducts from "../CardProducts/CardsProducts";
import Content from "../Content/Content";
import styles from './Index.module.scss'

export default function Index() {
    return <Content id="section">
    <>
      <Banner />
      <h3>| Top products</h3>
      <CardsProducts />          
      <h3>| Sapiens Music Store</h3>
      <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus viverra nibh eu suscipit. Phasellus accumsan metus velit, vel dictum enim ultricies at. Vestibulum a enim ac leo sollicitudin pellentesque. <br/>Mauris ullamcorper lacus sed est condimentum, non sollicitudin ex laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br/>Nunc lacus nisi, pretium ut mauris eu, feugiat commodo leo. Proin vel felis ut justo pharetra ultrices. Sed ut interdum augue, at feugiat nulla. Maecenas bibendum neque id dictum vulputate. <br/>Etiam sollicitudin velit a tortor maximus, nec condimentum lacus finibus. Donec et sagittis erat, in facilisis justo. Maecenas quis dignissim augue, viverra volutpat mi. <br/>Phasellus in diam lacus. Cras euismod, dolor nec condimentum porttitor, arcu nisl blandit tellus, non maximus ipsum nisl id ipsum. <br/>Proin pellentesque eget est eget semper. Mauris pellentesque felis a erat sodales tempor. Morbi elit nibh, imperdiet in ultrices sit amet, vulputate ac felis. Duis vehicula ex nec pulvinar ultrices. Morbi eget placerat ligula, hendrerit consequat tellus. Pellentesque quis convallis massa. Sed imperdiet felis et turpis vehicula mollis. Suspendisse potenti.</p>
    </>                
  </Content>
}