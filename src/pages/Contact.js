

const Contact = () => {

    return (
        <div className="contact">
        <div className="container contact-form">
            <div className="contact-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KF_8fkzS1249qshNYsF6HST4cQ82x2owoCndTzOwyeTQVXcYyYFk4x2CUdt_s3IMk1g&usqp=CAU" alt="rocket_contact"/>
            </div>
        <form >
            <h3>Drop Us a Message</h3>
           <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width:'100%', height:'200px'}}></textarea>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </div>
    
    );
    
}

export default Contact;
