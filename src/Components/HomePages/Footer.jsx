function Footer(){
    return(
        <>
        <div className="navbar bg-base-100 flex">
  <div className="flex-1 flex-col ">
    <p className="font-bold text-2xl">Join our news letter</p>
    <p>Get Updates us weekly</p>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="  Enter your email" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="">
    <button className="btn">Subscribe</button>
    </div>
  </div>
</div>
        <footer className="footer bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title ">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

</footer>
        </>
    )
}
export default Footer