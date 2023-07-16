import React from "react";
import {Link} from 'react-router-dom'

const Productdetailsreview = () => {
  return (
    <>
      <div className="container-fluid productreviewmainContainer">
        <div className="row">
          <div className="col-12">
            <div className="productreviewContainer">
              <ul className="nav nav-tabs productReviewUl" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link reviewnavLink active"
                    id="desc_tab"
                    data-bs-toggle="tab"
                    data-bs-target="#desc"
                    type="button"
                    role="tab"
                    aria-controls="desc"
                    aria-selected="true"
                  >
                    Description
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link reviewnavLink"
                    id="delivery_tab"
                    data-bs-toggle="tab"
                    data-bs-target="#delivery"
                    type="button"
                    role="tab"
                    aria-controls="delivery"
                    aria-selected="false"
                  >
                    Delivery Policy
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link reviewnavLink"
                    id="return_tab"
                    data-bs-toggle="tab"
                    data-bs-target="#returns"
                    type="button"
                    role="tab"
                    aria-controls="returns"
                    aria-selected="false"
                  >
                    Returns and Exchange Policy
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link reviewnavLink"
                    id="reviews_tab"
                    data-bs-toggle="tab"
                    data-bs-target="#reviews"
                    type="button"
                    role="tab"
                    aria-controls="reviews"
                    aria-selected="false"
                  >
                   Customer Reviews
                  </Link>
                </li>
              </ul>
              <div className="tab-content reviewTabcontent" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="desc"
                  role="tabpanel"
                  aria-labelledby="desc_tab"
                >
                 <p>
                 Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard. The real mother of pearl buttons and embroidered crocodile complete its elegant appeal.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                 </p>
                 <ol>
                  <li>MACHINE WASH AT MAX.TEMP. 30° C - NORMAL PROCESS</li>
                  <li>DO NOT BLEACH</li>
                  <li>DO NOT TUMBLE DRY</li>
                  <li>IRON AT MAX. TEMP. OF 110° C WITHOUT STEAM</li>
                  <li>DO NOT DRY CLEAN</li>
                 </ol>
                </div>
                <div
                  className="tab-pane deliveryClass fade"
                  id="delivery"
                  role="tabpanel"
                  aria-labelledby="delivery_tab"
                >
                  <h5>Delivery Order List</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo assumenda corporis temporibus molestiae maiores veritatis fugit? Perspiciatis quo accusamus esse temporibus impedit veritatis voluptatem nihil modi, vel repellat quia libero mollitia accusantium? Alias tenetur similique quibusdam dolorum temporibus reiciendis?</p>
                  <ol>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt?</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt?</li>
                  </ol>
                  <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum maiores necessitatibus, similique corporis aliquid perspiciatis autem magni animi eum delectus nulla libero aliquam obcaecati provident dolores nesciunt minima laudantium voluptatem dolorem? Unde id, a, in asperiores neque quam dolores tenetur maxime odio quo eaque aperiam ex? Atque doloribus labore perferendis.</p>
                </div>
                <div
                  className="tab-pane fade"
                  id="returns"
                  role="tabpanel"
                  aria-labelledby="return_tab"
                >
                  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea?</h5>
                  <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni rem deleniti veritatis dolores saepe sit explicabo, itaque eligendi possimus, modi nesciunt aperiam exercitationem adipisci, unde ab reprehenderit asperiores nisi?</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias fuga eius ipsam quod, aliquam sed! Nemo, corrupti ex, aspernatur doloribus eligendi neque quod facilis omnis quidem sed recusandae quibusdam officia deserunt, non perferendis similique possimus iure tempora odio. Perferendis.</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsam magni repudiandae doloribus itaque placeat a sint quod, deleniti quia eos optio quaerat, cupiditate praesentium accusantium delectus obcaecati error natus reprehenderit fugit? Culpa quasi officia modi corrupti quae eius magnam obcaecati delectus! Aliquam, nesciunt! Enim fugiat quam cumque quasi aliquid exercitationem consequatur ipsum saepe reiciendis.</p>
                </div>

                <div
                  className="tab-pane fade"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews_tab"
                >
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetailsreview;
