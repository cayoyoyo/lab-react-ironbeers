import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        window.location.href = "/beers";
      })
      .catch((error) => {
        console.error("Error al crear nueva cerveza:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Header />
      <h2 className="text-center">Add New Beer</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit} className="form-container">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="tagline" className="form-label">
                      Tagline:
                    </label>
                    <input
                      type="text"
                      id="tagline"
                      name="tagline"
                      value={formData.tagline}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description:
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="first_brewed" className="form-label">
                      First Brewed:
                    </label>
                    <input
                      type="text"
                      id="first_brewed"
                      name="first_brewed"
                      value={formData.first_brewed}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="brewers_tips" className="form-label">
                      Brewer's Tips:
                    </label>
                    <input
                      type="text"
                      id="brewers_tips"
                      name="brewers_tips"
                      value={formData.brewers_tips}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="attenuation_level" className="form-label">
                      Attenuation Level:
                    </label>
                    <input
                      type="number"
                      id="attenuation_level"
                      name="attenuation_level"
                      value={formData.attenuation_level}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="contributed_by" className="form-label">
                      Contributed by:
                    </label>
                    <input
                      type="text"
                      id="contributed_by"
                      name="contributed_by"
                      value={formData.contributed_by}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Add Beer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBeerPage;
