import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Nothing brings people together like a good burger. Juicy patties 
                stacked high with fresh ingredients, melted cheese, and perfectly 
                toasted buns create a taste everyone loves. From classic flavors to bold 
                creations, every bite is a little celebration of flavor and fun.
              </p>
              <ul>
                <li>
                  <p>
                   Crispy fries, tangy sauces, and fresh sides complement the burger experience, 
                   making every meal complete and satisfying.
                  </p>
                </li>
                <li>
                  <p>Sharing a burger with friends or family is more than just eating —
                     it’s creating memories over flavors everyone can enjoy.</p>
                </li>
                <li>
                  <p>
                    Every burger is crafted with care, packed with bold taste, and delivered fresh to your table, 
                    making every meal a reason to smile.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
