import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import avatar from "../assets/avatar.png";
import "../style.css";

const ProfilePage = () => {
  return (
    <main className="text-light py-4 profile-container">
      <Container className="mx-auto p-4" style={{ maxWidth: "700px" }}>
        <h1 className="mb-3 text-center">Edit Profile</h1>
        <hr className="border-secondary" />

        <Row className="mb-4 align-items-center flex-column flex-sm-row">
          <Col xs={12} sm={3} className="text-center mb-3">
            <Image src={avatar} rounded fluid alt="Profile" />
          </Col>
          <Col xs={12} sm={9} className="text-center text-sm-start">
            <Form.Control
              type="text"
              className="bg-secondary text-light profile-input mb-3"
              placeholder="Epicoder #1"
            />
            <Form.Label className="text-secondary pt-3 pb-3">
              Language:
            </Form.Label>
            <Form.Select className="bg-black text-light w-auto mb-3">
              <option>English</option>
              <option>Italian</option>
              <option>French</option>
              <option>Spanish</option>
            </Form.Select>
          </Col>
        </Row>

        <hr />

        <Row className="align-items-center">
          <Col sm={3} className="text-center text-sm-start">
            <Form.Label className="text-secondary">
              Maturity Settings:
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Button variant="dark" className="w-100 text-start mb-2">
              ALL MATURITY SETTINGS
            </Button>
            <p className="text-secondary">
              Show titles for all maturity settings for this profile.
            </p>
            <Button variant="outline-light" className="w-auto px-3">
              EDIT
            </Button>
          </Col>
        </Row>

        <Row className="align-items-center mt-4">
          <Col sm={3} className="d-none d-sm-block" />
          <Col sm={9}>
            <Form.Label className="text-secondary">
              Autoplay Controls:
            </Form.Label>
            <Form.Check
              type="checkbox"
              id="autoplay1"
              label="Autoplay next episode in a series on all devices"
              className="bg-transparent text-secondary mb-2"
              defaultChecked
            />
            <Form.Check
              type="checkbox"
              id="autoplay2"
              label="Autoplay previews while browsing on all devices"
              className="bg-transparent text-secondary"
              defaultChecked
            />
          </Col>
        </Row>

        <hr />

        <div className="text-center">
          <Button variant="outline-secondary" className="px-5 py-2 me-2">
            SAVE
          </Button>
          <Button variant="outline-secondary" className="px-5 py-2 me-2">
            CANCEL
          </Button>
          <Button variant="outline-secondary" className="px-5 py-2">
            DELETE PROFILE
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default ProfilePage;
