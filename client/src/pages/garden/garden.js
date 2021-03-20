import React, {useState, useEffect} from "react";
import axios from "axios";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Row from "../../components/Row/index";
import Col from "../../components/Col";
import CardContainer from "../../components/CardContainer";
import SearchForm from "../../components/SearchForm";



function Garden() {
//setting state for plants table and card object (2x2 plot Card component)
    const[plants, setPlants] = useState([])
    const[garden, setGarden] = useState([])
    // const[cardObject, setCardObject] = useState({}) //don't know if we need a card object yet


//Load all plants into plants list when Garden renders
    useEffect(() => {
        loadPlants()
    }, []);

    function loadPlants() {
        axios.get(" ")
          .then(res => setPlants(res.data)) 
          .catch(err => console.log(err));
    };



    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }


//Load empty Garden Plots/Cards when Garden renders
    useEffect(() => {
        loadCards()
    }, []);

    function loadCards() {
        axios.get(" ")
            .then(res => setGarden(res.data)) 
            .catch(err => console.log(err));
    };


//update the plot/card with selected plant & re-load the cards in Garden
    function handleCardSubmit(event) {
        event.preventDefault;
        axios.put("") //route to update plot with selected plant
          .then(res => loadCards())
          .catch(err => console.log(err));
    };


//when the user saves their garden, post saved garden
    function handleGardenSubmit(event) {
        event.preventDefault;
        axios.post("") //route to update plot with selected plant
          .then(res => loadCards())
          .catch(err => console.log(err));
    };




  return (
    <div>
      <Header />
      <Container />
            <Row>
                <Col>
                    <List 
                        plants={plants} 
                        value=

                    />
                </Col>
                <Col>
                    <CardContainer 
                        onClick={handleGardenSubmit}
                    />
                </Col>

            </Row>

            <Row>
                <SearchForm>
                    search={this.state.search}
                </SearchForm>
            </Row>        
      <Footer />

    </div>
  );
}

export default Garden;

// new garden should append here in list format. 