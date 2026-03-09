const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/mjgagoyb"
      method="POST"
      className=" flex flex-col gap-4 card bg-base-200 p-8 max-w-140 w-full"
    >
      <div className=" flex flex-col gap-2">
        <label className="lable" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="input w-full"
          placeholder="e.g, Mugisha Bruno "
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label className="lable" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="input w-full"
          placeholder="e.g, mugisha@example.com"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label className="lable" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="e.g, Hello how I can support you..."
          name="message"
          id="message"
          className="textarea w-full"
        ></textarea>
      </div>
      <div className=" flex flex-col gap-2">
        <button type="submit" className="btn btn-secondary">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
