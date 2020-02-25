import React from "react";

const Header = () => {
  return (
    <header className="container text-center mx-auto">
      <div className="row">
        <div className="col-12 mt-5">
          <h1>Jeremy Bertin</h1>
          <h3>Junior Front-end Web Developer</h3>
          <hr className="underline mt-5"></hr>
        </div>
        <div className="col-8 mx-auto">
          <div className="card mt-5 border-0">
            <div className="row no-gutters">
              <div className="col-4 text-right">
                <img
                  className="card-img profile-picture rounded-circle"
                  src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/33141792_10216648317469545_2153572262358286336_n.jpg?_nc_cat=102&_nc_ohc=FwGvojsh2SkAX8cjBft&_nc_ht=scontent-vie1-1.xx&oh=0325703901526ecbed513ed9b94a43fb&oe=5EB8E72B"
                  alt="..."
                />
              </div>
              <div className="col-8 text-left my-auto">
                <div className="card-body">
                  <h5 className="card-title">Hello, I'm Jeremy !</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam finibus felis lorem, vel molestie erat ultrices ac.
                    Donec condimentum elit sapien, nec congue erat accumsan
                    eget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
