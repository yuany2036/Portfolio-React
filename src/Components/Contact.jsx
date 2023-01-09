const Contact = () => {
  return (
    <section id="section_contact">
      <h2>contact</h2>
      <div>
        <p>
          Want to reach out? Write down your message and let's get in touch!
        </p>
        <br />
        <div>
          <div className="contact_form">
            <form action="">
              <label for="name">Your Name:</label>
              <input type="text" />
              <br />
              <label for="email">Your Email:</label>
              <input type="email" />
              <br />
              <textarea name="" id="" cols="60" rows="10"></textarea>
              <br />
              <button>Send</button>
            </form>
          </div>
          <div className="socials">
            <p>Reach out via social media!</p>
            <div>
              <a href="https://github.com/yuany2036">
                <i className="fa-brands fa-github"></i>
              </a>
              {/* <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
