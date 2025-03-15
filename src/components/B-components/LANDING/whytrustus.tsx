import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Getintouch() {
  return (
    <>
      <div className="Layout_layout__6J70X">
        <main className="Layout_main__k2ohw">
          <div className="styles_background__EAtcT">
            <div className="Container_container__0SGNv styles_container__3xYhP">
              <div
                className="styles_heading__gOFHc"
                style={{ maxWidth: '600px;' }}
              >
                <div className="styles_eyebrow__3stYu">
                  <div className="styles_eyebrow__ExZzW">Contact Us</div>
                </div>
                <h2 className="styles_text__Fvsk7 styles_title__vat3u">
                  We're here to help
                </h2>
                <div className="styles_text__6QNZg">
                  Get in touch with our sales and support teams for product
                  questions, live architecture sessions, demos and more.
                </div>
              </div>
              <div className="styles_ctas__WMU3d">
                <div className="styles_cta__jNfPD">
                  <span className="styles_icon___lNml">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-calendar"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </span>
                  <span className="styles_title__ooFpF">Schedule a Demo</span>
                  <span className="styles_text__G0jNC">
                    Talk to an expert about your data security needs. Discuss
                    your requirements, learn about custom pricing, or request a
                    product demo.
                  </span>
                  <div className="styles_book__Pq_te">
                    <input
                      type="email"
                      placeholder="Work Email address"
                      value=""
                    />
                    <button className="styles_button__hhdzs">
                      Book demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-right"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <a className="styles_cta__jNfPD" href="/contact#">
                  <span className="styles_icon___lNml">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-life-buoy"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m4.93 4.93 4.24 4.24"></path>
                      <path d="m14.83 9.17 4.24-4.24"></path>
                      <path d="m14.83 14.83 4.24 4.24"></path>
                      <path d="m9.17 14.83-4.24 4.24"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                  </span>
                  <span className="styles_title__ooFpF">Send us a message</span>
                  <span className="styles_text__G0jNC">
                    Have a question? Get hands on support directly from our
                    engineers by sending us a message. We'll respond to you in
                    &lt;12 hours.
                  </span>
                  <span
                    className="styles_button__hhdzs"
                    data-variant="secondary"
                  >
                    Get in touch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="Container_container__0SGNv styles_more__a3Ve_">
            <a
              className="styles_secondaryCTA__c0Jpi"
              href="https://docs.evervault.com"
            >
              <span className="styles_icon___lNml">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-book"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                </svg>
              </span>
              <span className="styles_title__ooFpF">Documentation</span>
              <span className="styles_text__G0jNC">
                Find detailed guides, API references, and more in our
                documentation.
              </span>
            </a>
            <a className="styles_secondaryCTA__c0Jpi" href="/careers">
              <span className="styles_icon___lNml">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-briefcase"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </span>
              <span className="styles_title__ooFpF">Careers</span>
              <span className="styles_text__G0jNC">
                Join us in building the future of data privacy and security.
              </span>
            </a>
            <a className="styles_secondaryCTA__c0Jpi" href="/blog">
              <span className="styles_icon___lNml">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-rss"
                >
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 4a16 16 0 0 1 16 16"></path>
                  <circle cx="5" cy="19" r="1"></circle>
                </svg>
              </span>
              <span className="styles_title__ooFpF">Blog</span>
              <span className="styles_text__G0jNC">
                Stay up to date with the latest news, updates, and insights from
                Evervault.
              </span>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
