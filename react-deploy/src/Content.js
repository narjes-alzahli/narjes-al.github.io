import React, { Component } from "react";
import triviac from "./assets/triviac.jpg";
import mercury from "./assets/mercury.png";
import fitnux from "./assets/fitnux.png";
import ocaml from "./assets/ocaml.png";
import women from "./assets/women.png";
import amp from "./assets/amp.png";
import coming from "./assets/coming.jpg";
import aclab from "./assets/aclab.png";
import psichi from "./assets/psichi.png";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import booksmart from "./assets/booksmart.png";
import booksmart_demo from "./assets/booksmart_demo.png";
import wholesome from "./assets/wholesome.png";
import quolesomeness from "./assets/quolesomeness.png";
import tangram from "./assets/tangram.svg";
import music from "./assets/music.jpeg";

class Content extends Component {
  bio() {
    return (
      <Container fluid className="App">
        <Col xs={5}>
          <p className="letter hidden" style={{ textAlign: "left" }}>
            <br />
            I'm an aspiring full-stack software engineer, currently seeking
            full-time SWE opportunities. This summer, I worked as SDE intern at
            Amazon.
            <br />
            <br />
            Academically, I'm passionate about natural language processing and
            machine learning. I've been doing research at Cornell Tech on
            abstract visual-linguistic reasoning with tangrams. Watch my talk
            for EMNLP 2022 here:{" "}
            <a
              href={"https://www.youtube.com/watch?v=hCmX8ZFIVf8"}
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              Abstract Visual Reasoning with Tangram Shapes
            </a>{" "}
            (Best Long Paper Award).
          </p>

          <p className="title hidden" style={{ textAlign: "left" }}>
            {"Relevant Experiences:"}
          </p>
          <p className="letter hidden" style={{ textAlign: "left" }}>
            - software development intern @ Amazon (JP Kindle Manga)
            <br />- research assistant @ Language, Interaction, and Learning Lab
            (advised by Prof.{" "}
            <a
              href={"https://yoavartzi.com/"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Yoav Artzi
            </a>
            )
            <br />
            - teaching assistant @ CS 2110: Object-Oriented Programming in Java
            <br />- software developer @{" "}
            <a
              href={"https://ewh.engineering.cornell.edu/"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Cornell Engineering World Health
            </a>
            <br />
          </p>

          <p className="title hidden" style={{ textAlign: "left" }}>
            {"Also:"}
          </p>
          <p className="letter hidden" style={{ textAlign: "left" }}>
            - member @ Phi Beta Kappa, academic honor society
            <br />
            - research assistant @ Attention, Memory, and Perception Lab
            (advised by Prof. Khena Swallow)
            <br />
            - student ambassador @ College of Arts & Sciences
            <br />
            - member @ Psi Chi, international honors society in psychology
            <br />
            <br />
            In my free time, I enjoy drawing, ballet, traveling, and hiking. I
            also love cats, video games, and good food. :)
            <br />
            <br />
            [Last updated: Jan.2023]
          </p>
        </Col>
      </Container>
    );
  }

  comp() {
    return (
      <Container fluid className="App">
        <Col xs={8}>
          <Row className="pt-4">
            <Image src={tangram} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                ABSTRACT VISUAL REASONING WITH TANGRAM SHAPES
              </p>
              <p className="letter">
                NLP research project advised by Prof. Yoav Artzi at the Cornell
                Language, Interaction, and Learning Lab.
                <br />
                <br />
                Built a richly annotated tangram dataset, KiloGram, for studying
                abstract visual reasoning in humans and machines (over 13,000
                annotations for 1,016 tangrams).
                <br />
                <br />
                Created an interface for selecting and annotating tangram puzzle
                pieces that collects descriptions from MTurk & a data
                visualization dashboard, using Javascript, HTML/CSS, ReactJS and
                Firebase. Conducted statistical analysis with well-defined
                metrics and fine-tuned CLIP and ViLT models with PyTorch.
                <br />
                <br />
                My first-authored paper was awarded Best Long Paper at EMNLP
                (Empirical Methods in Natural Language Processing) in 2022.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href={"https://arxiv.org/abs/2211.16492"}
                >
                  {"Paper"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href={"https://www.youtube.com/watch?v=hCmX8ZFIVf8"}
                >
                  {"Talk"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/lil-lab/kilogram"
                >
                  {"GitHub"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://tangram-online.web.app/"
                >
                  {"Annotation Interface"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://lil.nlp.cornell.edu/kilogram/dashboard/"
                >
                  {"Data Dashboard"}
                </Button>
              </p>
            </Col>
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={triviac} roundedCircle height="150px" />

            <Col>
              <p className="title">TRIVIAC - TRIVIA GAMES</p>
              <p className="letter">
                An iOS app for generating, playing, and archiving single- or
                multi-player trivia games. <br />
                <br />
                Built with UIKit, Firebase, and OpenTriviaDatabase.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/anya-ji/triviac"
                >
                  {"GitHub"}
                </Button>
                <Button
                  className="mt-4 letter"
                  variant="outline-light"
                  href="https://apps.apple.com/app/id1515983515"
                >
                  {"App Store"}
                </Button>
              </p>
            </Col>
          </Row>
          <Row className="player-wrapper justify-content-center">
            <ReactPlayer
              className="react-player"
              url="video/triviac_demo.mov"
              controls={false}
              loop
              playing
            />
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={mercury} roundedCircle height="150px" />

            <Col>
              <p className="title">MERCURY - ONLINE OFFICE HOURS </p>
              <p className="letter">
                All-in-one platform for better online office hours experiences!
                Supports separate roles for students and TAs, queuing, and
                video/audio conferencing.
                <br />
                <br />
                Built with ReactJS and PostgreSQL.
                {/* <br />
                Designed mock-ups on Figma and implemented UI components with
                SemanticUI, worked with Google OAuth for user login and web
                sockets to signal joining/leaving calls and broadcast messages,
                and made API calls with Axios to update the server with current
                users. */}
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/MercuryOH/mercury"
                >
                  {"GitHub"}
                </Button>
              </p>
            </Col>
          </Row>
          <br />
          <Row className="player-wrapper justify-content-center">
            <ReactPlayer
              className="react-player"
              url="video/mercury_demo.mp4"
              controls={true}
            />
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={wholesome} height="150px" width="150px" />
            <Col>
              <p className="title">QUOLESOMENESS - WHOLESOME QUOTES FINDER</p>
              <p className="letter">
                An information retrieval system to find personalized wholesome
                quotes based on categories, emotion, and your input text,
                integrating the Latent Semantic Indexing (LSI) Model, sentiment
                analysis, Wordnet word embeddings, pointwise mutual information
                (PMI) for tags merging, etc.
                <br />
                <br />
                Built with ReactJS, Python (information retrieval system), and
                Heroku.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/anya-ji/quolesomeness"
                >
                  {"GitHub"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://quolesome-ness-4300.herokuapp.com/"
                >
                  {"Quolesomeness App"}
                </Button>
              </p>
            </Col>
          </Row>
          <br />
          <Row className="player-wrapper justify-content-center">
            <Image src={quolesomeness} height="400px" />
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={women} roundedCircle height="150px" />

            <Col>
              <p className="title">HEALTH FRIEND</p>
              <p className="letter">
                A tablet game to help women in low-resource areas in India to
                learn about their own bodies and menstrual health, partnered
                with Barefoot College in India.
                <br />
                <br />
                Built with Kivy in Python and Firebase.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/Cornell-Engineering-World-Health/womens-health-game"
                >
                  {"GitHub"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href=" https://play.google.com/store/apps/details?id=org.cornellewh.healthfriend"
                >
                  {"Google Play Store"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://ewh.engineering.cornell.edu/about"
                >
                  {"Cornell Engineering World Health"}
                </Button>
              </p>
            </Col>
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={ocaml} roundedCircle height="150px" />
            <Col>
              <p className="title">ANAGRAMS</p>
              <p className="letter">
                A multiplayer terminal game in OCaml for customizable anagrams
                games, with different difficulty levels and various game rules.
                {/* <br />
                Integrated Anagramica API to validate created words.
                <br />
                Final project for functional programming (CS 3110). Collaborated
                with Bahar Tehranipoor and Ashley Yu. */}
                <br />
                <br />
                Built with OCaml.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.coecis.cornell.edu/bt277/cs3110-proj"
                >
                  {"GitHub"}
                </Button>
              </p>
            </Col>
          </Row>
          <Row className="player-wrapper justify-content-center">
            <ReactPlayer
              className="react-player"
              url="video/anagrams_demo.mp4"
              controls={false}
              loop
              playing
            />
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={booksmart} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">BOOKSMART - BOOK EXCHANGE</p>
              <p className="letter">
                An iOS app for selling and purchasing second-hand textbooks on
                campus.
                <br />
                <br />
                Built with UIKit, Firestore, SQLite3, Amazon S3, and Heroku.
                <br />
                {/* Lead a team of 6 with a designer and developers and work on both
                iOS and backend.
                <br />
                Use UIKit to create informative yet easy-to-navigate UI; support
                real-time messaging with Firestore; create efficient relational
                database models of user and book information with SQLite3; store
                images on Amazon S3, and deploy the database using Docker and
                Heroku.
                <br /> */}
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.coecis.cornell.edu/bt277/cs3110-proj"
                >
                  {"GitHub"}
                </Button>
              </p>
            </Col>
          </Row>
          <br />
          <Row className="player-wrapper justify-content-center">
            <Image src={booksmart_demo} height="500px" />
          </Row>
        </Col>
      </Container>
    );
  }

  psych() {
    return (
      <Container fluid className="App">
        <Col xs={8}>
          <Row className="pt-4">
            <Image src={amp} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Research Assistant @ Attention, Memory & Perception Lab
                (Feb.2020 - May.2021)
              </p>
              <p className="letter">
                Worked on event segmentation, advised by Prof. Khena Swallow.
                <br /> <br />
                (Spring 2021)
                <br /> Led a research on event segmentation and racial
                prejudice. Programmed the experiment hosted on Pavlovia.
                <br /> <br />
                (Spring 2020 - Fall 2020)
                <br /> Developed a computer program for the experiment with
                PsychoPy that lets the subject segment and label video clips
                when a change in action or goals is perceived and collects
                segmentation timestamps, to study how people perceive actions
                and goals.
                <br />
                Analyzed recall error types and semantic similarity among
                sentences, nouns, and verbs on a subset of free recall data from
                an event segmentation task.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/anya-ji/event-coding"
                >
                  {"GitHub/Event-coding"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://amp-lab.psych.cornell.edu/"
                >
                  {"AMP Lab"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={music} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Background Music, Time Perception, and Memory
              </p>
              <p className="letter">
                Does background music affect people's time perception of video
                clips? What roles do music, familiarity, and preference play in
                time perception and event recall?
                <br />
                <br />
                Research project for PSYCH3160: Auditory Perception, The Music
                Lab.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://docs.google.com/presentation/d/1qM5ApQ8qEnmUDLm1Sg-nUZkpN1lf9YSpV0egLZGXhIQ/edit?usp=sharing"
                >
                  {"Presentation"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={psichi} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Member @ Psi Chi, the International Honors Society in Psychology
              </p>
              <p className="letter">
                Attend grad school workshops and social networking events in the
                field of psychology.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://www.instagram.com/psi_chi_cornell/?hl=en"
                >
                  {"Psi Chi Cornell"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={aclab} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Research Assistant @ Affect & Cognition Lab (Oct.2019 -
                Feb.2020)
              </p>
              <p className="letter">
                Completed Human Subjects Research (IRB) Training.
                <br /> <br />
                Worked with graduate student Saeedeh Sadeghi studying the
                correlation between time perception and orienting response.
                <br /> <br />
                Prepared ECG electrodes, proctored experiments with student
                subjects and entered data on computer.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="http://aclab.human.cornell.edu/"
                >
                  {"AC Lab"}
                </Button>
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }

  render() {
    if (this.props.content === 1) {
      return this.bio();
    } else if (this.props.content === 2) {
      return this.comp();
    } else if (this.props.content === 3) {
      return this.psych();
    } else {
      return <></>;
    }
  }
}

export default Content;
