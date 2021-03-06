import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Tabs, Tab } from 'react-bootstrap';

import Footer from './components/Footer';
import Header from './components/Header';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NfcPage from './pages/NfcPage';
import QuestPage from './pages/QuestPage';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerLinks: [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "nfc", path: "/nfc" },
        { name: "quests", path: "/quests" }
      ],
      home: {
        title: "Welcome to HoloTag World!",
        subtitle: "Coming Summer 2020",
        description: "Do you love adventure? Are you an avid explorer? If the answer to either of those questions is yes, get ready for an exciting new way to explore the world around you!"
      },
      about: {
        title: "What is HoloTag World?"
      },
      nfc: {
        title: "NFC Technology",
        summary: "We use NFC technology to transform your device into a portal to your next adventure."
      },
      quests: {
        title: "Quest System",
        summary: "The platform is based on a questing system. Find a tag, start a quest. Buy a tag, create a quest."
      }
    }
  }

  render() {
    return (
      <Container className=" vh-100" fluid="true">
        <Header title="HoloTag World" />
        <Container className="tabbed-area">
          <Tabs defaultActiveKey="home">

            <Tab eventKey="home" title="Home">
              <HomePage
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                description={this.state.home.description}
                nfc={this.state.nfc}
                quests={this.state.quests}
              />
            </Tab>

            <Tab eventKey="about" title="About">
              <AboutPage
                title={this.state.about.title}
              />
            </Tab>

            <Tab eventKey="nfc" title="NFC">
              <NfcPage title={this.state.nfc.title} />
            </Tab>

            <Tab eventKey="quests" title="Quests">
              <QuestPage title={this.state.quests.title} />
            </Tab>
          </Tabs>
        </Container>
        <Footer />
      </Container>
    );
  }
}
