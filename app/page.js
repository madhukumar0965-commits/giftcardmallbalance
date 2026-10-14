const essentials = [
  {
    icon: "◎",
    title: "Start with your card instructions",
    text: "Looking for a GiftCardMall/MyGift Balance? Check the packaging first. It tells you which service is meant for your specific card.",
  },
  {
    icon: "▤",
    title: "Know what your available funds cover",
    text: "Purchases, temporary holds, reversals, and refunds can all change what is available. That is often why a GiftCardMall/MyGift Balance looks different than expected.",
  },
  {
    icon: "✓",
    title: "See if your card needs activation",
    text: "Some cards need to be activated before you can shop. GiftCardMall/MyGift Activation steps depend on the card, so follow the instructions that came with yours. If anything is unclear, ask the issuer before trying a different process.",
  },
];

const problems = [
  {
    title: "The balance page won’t load",
    text: "Double-check the address printed in your card materials and try again a little later. If you need a GiftCardMall/MyGift check balance, the issuer can help with an outage or account-specific question.",
  },
  {
    title: "Your balance looks different",
    text: "Look over recent purchases, receipts, pending holds, and refunds. A GiftCardMall/MyGift Balance may reflect a temporary authorization; the issuer can explain a difference that remains.",
  },
  {
    title: "The activation steps aren’t working",
    text: "Requirements vary by card. For GiftCardMall/MyGift Activation, follow the instructions supplied with your product and contact the issuer if you still can’t complete the process.",
  },
  {
    title: "A prepaid Visa purchase was declined",
    text: "The card may need activation, the available funds may not cover the full total, or the merchant may not accept it. GiftCardMall/MyGift visa questions about a specific decline are best handled by the issuer.",
  },
  {
    title: "Refund hasn’t arrived",
    text: "Refund timing varies by merchant and issuer. Keep your confirmation and contact the merchant if the credit hasn’t appeared within the indicated timeframe.",
  },
  {
    title: "A website or message seems suspicious",
    text: "Pause before following unfamiliar links. Compare the full web address with your card documentation, and don’t share card details with unrelated websites.",
  },
];

const faqs = [
  {
    question: "What’s the safest way to check my GiftCardMall/MyGift Balance?",
    answer:
      "Start with the balance instructions that came with your card; different cards can use different services. A GiftCardMall/MyGift check balance search can help you find general guidance, but only the verified issuer service can answer questions about your account.",
  },
  {
    question: "Why is my GiftCardMall/MyGift Balance different from what I expected?",
    answer:
      "A purchase, temporary authorization, reversal, or refund can affect the amount available to spend. Compare the balance with your receipts and recent activity, then ask the issuer about anything you can’t explain.",
  },
  {
    question: "Why do people search “giftcardmall/mygift,” “GiftCardMall MyGift,” or “giftcardmall mygift”?",
    answer:
      "People use giftcardmall/mygift, GiftCardMall MyGift, and giftcardmall mygift when looking for card, balance, or activation information. The search wording doesn’t tell you which service applies: check your exact card and its original instructions. If giftcardmall mygift is the phrase you searched, verify the card before following a link. You may also see giftcardmall/mygift in search suggestions; treat it as a search term, not a verification. A GiftCardMall MyGift search is a starting point, not a substitute for checking the card. If giftcardmall mygift is in your search history, the same tip applies: verify the card first.",
  },
  {
    question: "Is a GiftCardMall/MyGift check balance result the right service for my card?",
    answer:
      "Don’t rely on a search result alone. Compare the complete address with the documentation that came with your card. If you’re not sure, use verified issuer contact details before entering any information.",
  },
  {
    question: "What should I know about a GiftCardMall/MyGift visa card before using it?",
    answer:
      "A GiftCardMall/MyGift visa card may be declined if funds are short, the card needs activation, the merchant doesn’t accept it, or an authorization can’t be completed. Check your terms and ask the issuer about a specific transaction. Acceptance can vary by merchant, so check before relying on a prepaid card for a purchase.",
  },
  {
    question: "Can this site do a GiftCardMall/MyGift check balance for me?",
    answer:
      "No. Even if you came here after a GiftCardMall/MyGift check balance search, this is an independent information guide. It cannot retrieve private balances, activate cards, process payments, or access cardholder accounts.",
  },
  {
    question: "How do I look up giftcardmall/mygift information safely?",
    answer:
      "Whether you searched giftcardmall/mygift, GiftCardMall MyGift, or giftcardmall mygift, pause to verify the full web address against your card documents. A giftcardmall/mygift search phrase does not make a site official. Never post your card number, PIN, CVV, or verification code on an unrelated site.",
  },
  {
    question: "What if the balance service is unavailable?",
    answer:
      "Double-check the servicing address in your card documentation and try again later in case of a temporary technical issue. Contact the issuer using verified support details for account-specific help.",
  },
  {
    question: "Can I use a GiftCardMall/MyGift visa card for every online purchase?",
    answer:
      "Not always. Online acceptance depends on the card’s terms, available funds, issuer rules, and the merchant. Read your card documentation and check with the issuer if you have a question about your GiftCardMall/MyGift visa card. These rules can differ from one prepaid card to another.",
  },
  {
    question: "Where can I find GiftCardMall/MyGift Activation instructions?",
    answer:
      "Look at the packaging or paperwork supplied with your card for GiftCardMall/MyGift Activation instructions. Requirements differ by product, so use the steps supplied with yours. If the GiftCardMall/MyGift Activation process doesn’t work, contact the issuer using verified details rather than sharing card information with a third-party site. Those GiftCardMall/MyGift Activation directions should match your card.",
  },
  {
    question: "What should I have ready to check balance information?",
    answer:
      "For a GiftCardMall/MyGift check balance, have the card and its original instructions nearby. Verify the destination before you continue, and never share your PIN or security code with an unrelated site.",
  },
  {
    question: "Is GiftCardCheck affiliated with GiftCardMall/MyGift?",
    answer:
      "No. This independent educational guide is not affiliated with or endorsed by GiftCardMall, MyGift, Blackhawk Network, Visa, Mastercard, American Express, any bank, retailer, or card issuer.",
  },
];

function GiftCardIllustration() {
  return (
    <div className="card-scene" role="img" aria-label="Illustration of a prepaid card information guide">
      <div className="card-glow" />
      <div className="decor decor-one">✳</div>
      <div className="decor decor-two">✦</div>
      <div className="gift-card">
        <div className="card-topline">
          <span>PREPAID CARD GUIDE</span>
          <span className="secure-mark"><i /> SECURE</span>
        </div>
        <div className="chip"><span /><span /><span /><span /></div>
        <div className="card-number" aria-hidden="true">•••• &nbsp; •••• &nbsp; ••••</div>
        <div className="card-bottom">BALANCE <b>·</b> ACTIVATION <b>·</b> CARD SAFETY</div>
      </div>
      <div className="card-note"><span>✓</span> Information to help you make informed choices</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header" id="home">
        <a className="brand" href="#home" aria-label="GiftCardCheck home">
          GiftCard<span>Check</span><i />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#balance">Balance Guide</a>
          <a href="#mygift">MyGift Guide</a>
          <a href="#visa">Visa Cards</a>
          <a href="#troubleshooting">Troubleshooting</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="nav-cta" href="#balance">Explore guide <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span /> PREPAID CARD INFORMATION</div>
              <h1>GiftCardMall/MyGift<br /><span>Balance Guide</span></h1>
              <p>
                Looking for GiftCardMall/MyGift Balance information, activation help, or tips for using a
                prepaid card? This independent guide walks through the questions cardholders ask most often
                and points you back to the instructions for your particular card.
              </p>
              <p>
                For GiftCardMall/MyGift Activation, follow the steps that came with your card. Requirements
                aren’t the same for every prepaid product, so check the packaging before you begin.
              </p>
              <p>
                A GiftCardMall/MyGift check balance search can be a useful starting point, but your card’s
                packaging is what helps you identify its correct service. Take a moment to check those details
                before entering anything online.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#balance">Explore balance guide <span aria-hidden="true">→</span></a>
                <a className="button button-secondary" href="#troubleshooting">Payment help</a>
              </div>
              <div className="hero-note"><span>✓</span> Independent information. No card account access.</div>
            </div>
            <GiftCardIllustration />
          </div>
          <div className="independent-notice">
            <div className="notice-icon" aria-hidden="true">i</div>
            <div>
              <strong>Independent information website</strong>
              <p>
                GiftCardCheck is not the official website of GiftCardMall, MyGift, Blackhawk Network, Visa,
                Mastercard, a bank, or a card issuer. We cannot access private card accounts, retrieve balances,
                or activate cards. Verify the service for your card using its original documentation.
              </p>
            </div>
          </div>
        </section>

        <section className="section essentials-section" aria-labelledby="essentials-title">
          <div className="section-heading centered">
            <span className="eyebrow-text">BALANCE CHECK ESSENTIALS</span>
            <h2 id="essentials-title">A few things to know <span>before you check.</span></h2>
            <p>Useful starting points for balance questions, available funds, and card status.</p>
          </div>
          <div className="essentials-grid">
            {essentials.map((item, index) => (
              <article className="essential-card" key={item.title}>
                <div className={`essential-icon essential-icon-${index}`} aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="card-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section article-section" id="balance">
          <article className="article-copy">
            <span className="eyebrow-text">BALANCE INFORMATION</span>
            <h2>GiftCardMall/MyGift Balance: <span>what to know</span></h2>
            <p>
              If you’re looking for a GiftCardMall/MyGift Balance, you probably want to know how much you can
              spend or where your card is serviced. Start with the card itself: similar-looking prepaid cards
              can have different issuers and different instructions.
            </p>
            <h3>How do balance checks work?</h3>
            <p>
              A GiftCardMall/MyGift check balance search may surface several pages, so don’t choose one just
              because the wording looks familiar. Read the instructions packaged with your card, use the
              balance destination they identify, and check the full web address before continuing. This guide
              does not collect card details or retrieve private balances.
            </p>
            <p>
              When people search for a GiftCardMall/MyGift Balance, they may be holding different card
              products. The name in a search phrase isn’t enough to identify the issuer or confirm that a
              particular balance page applies to your card. Let the printed instructions make that call.
            </p>
            <ol className="guide-list">
              <li><span>1</span>Locate your card and its original documentation.</li>
              <li><span>2</span>Find the balance inquiry instructions for that product.</li>
              <li><span>3</span>Verify the destination address before proceeding.</li>
              <li><span>4</span>Compare the information with recent transactions and receipts.</li>
              <li><span>5</span>Contact the issuer if you still have questions.</li>
            </ol>
            <h3>Why might your GiftCardMall/MyGift Balance change?</h3>
            <p>
              Completed purchases, temporary merchant holds, reversals, and refunds can affect your
              GiftCardMall/MyGift Balance. A temporary authorization may reserve funds before the final
              purchase amount is settled. Keep receipts and confirmations so you can compare the activity
              with the amount shown by the issuer.
            </p>
            <p>
              If your GiftCardMall/MyGift Balance still doesn’t add up after you account for recent activity,
              contact the issuer using the details provided with the card. They can review the transaction
              history; an independent guide cannot see your account or tell you why a particular amount is
              pending.
            </p>
            <p>
              Before you check balance information, gather your card and any recent receipts. That makes it
              easier to compare the issuer’s available amount with what you have spent, without guessing about
              pending activity.
            </p>
            <p>
              If you’re looking up a GiftCardMall/MyGift check balance, remember that a balance check only
              answers part of the question. A pending hold or refund can affect what is available now, so
              review recent transactions before assuming something has gone wrong.
            </p>
            <h3>Verify the service before sharing information</h3>
            <p>
              Search results for GiftCardMall/MyGift may lead to different sites. A familiar page title—or a
              result that promises an instant GiftCardMall/MyGift check balance—doesn’t prove the service is
              official or suitable for your product. Confirm the destination against your card materials
              before sharing sensitive information.
            </p>
            <p>
              If giftcardmall/mygift is what brought you here, remember that a general guide can explain what
              to look for, but it can’t confirm a private balance. Use the service named in your card
              documentation for account-specific information. Searching giftcardmall/mygift won’t reveal an
              account balance without the issuer’s verified service.
            </p>
            <p>
              If your search was giftcardmall mygift, use the same care: check the full address, make sure
              the instructions fit your card, and don’t enter details just to read general advice.
            </p>
            <h3>Activation depends on your particular card</h3>
            <p>
              GiftCardMall/MyGift Activation steps are set by the card issuer. Some cards are ready to use,
              while others need a separate activation step. Check the printed directions first, and don’t
              assume GiftCardMall/MyGift Activation instructions for a different card will apply to yours.
            </p>
            <p>
              If GiftCardMall/MyGift Activation doesn’t work as expected, double-check that you’re following
              the right product instructions and contact the issuer through a verified channel. Avoid
              repeating sensitive card details on unrelated pages.
            </p>
          </article>
          <aside className="side-card">
            <div className="side-card-top"><span className="side-icon">✓</span><span>BEFORE YOU BEGIN</span></div>
            <h3>Balance check checklist</h3>
            <p>Keep these steps in mind when looking for balance information.</p>
            <ul className="check-list">
              <li>Identify the card type and issuer.</li>
              <li>Verify the service using card materials.</li>
              <li>Review purchases, holds, and refunds.</li>
              <li>Keep your PIN and security code private.</li>
              <li>Ask the issuer about account questions.</li>
            </ul>
            <div className="side-card-foot">Your card details belong on a verified issuer service.</div>
          </aside>
        </section>

        <section className="section mygift-section" id="mygift">
          <div className="mygift-heading">
            <div>
              <span className="eyebrow-text">CARDHOLDER GUIDE</span>
              <h2>Searching for <span>MyGift?</span></h2>
            </div>
            <p>Find reliable card information by checking the product and following the instructions that came with it.</p>
          </div>
          <div className="mygift-content">
            <div className="mygift-intro">
              <div className="mygift-symbol" aria-hidden="true">M<span>↗</span></div>
              <h3>Start with your GiftCardMall MyGift card.</h3>
              <p>
                  A search for GiftCardMall MyGift may bring up balance, activation, or payment information.
                  People also type giftcardmall mygift when they aren’t sure which instructions apply. When
                  giftcardmall mygift is how you found this page, match the service to the product in your
                  hands rather than relying on a phrase
                  in a search box.
                </p>
            </div>
            <div className="mygift-details">
              <article>
                <span className="detail-number">01</span>
                <div><h3>Read the original documentation</h3><p>For GiftCardMall MyGift questions, the packaging and issuer instructions are a better starting point than a generic search result.</p></div>
              </article>
              <article>
                <span className="detail-number">02</span>
                <div><h3>Check the complete address</h3><p>Whether you searched GiftCardMall MyGift or giftcardmall mygift, compare the full web address with your card materials before continuing.</p></div>
              </article>
              <article>
                <span className="detail-number">03</span>
                <div><h3>Protect private card details</h3><p>An informational article does not need your number, PIN, CVV, or verification code.</p></div>
              </article>
            </div>
          </div>
          <div className="domain-warning" id="verify">
            <span className="warning-icon" aria-hidden="true">!</span>
            <div>
              <strong>Searching for a GiftCardMall MyGift service?</strong>
              <p>Searching giftcardmall mygift—or looking for a familiar web address—doesn’t confirm that a service is active or right for every card. Compare the complete address with your card documentation. If you’re looking up GiftCardMall MyGift details, check that the information matches your product.</p>
            </div>
            <a href="#security">Safe browsing tips <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="section visa-section" id="visa">
          <div className="visa-heading">
            <span className="eyebrow-text">PREPAID CARD USAGE</span>
            <h2>Using a prepaid <span>Visa gift card.</span></h2>
            <p>Acceptance depends on your card’s terms, issuer rules, and the merchant’s payment policies.</p>
          </div>
          <div className="visa-body">
            <div className="visa-copy">
              <p>
                A GiftCardMall/MyGift visa card is a prepaid card, so the amount you can use is limited to
                available funds and the terms that came with your product. A prepaid Visa logo doesn’t promise
                acceptance for every merchant or transaction.
              </p>
              <p>
                Before using a GiftCardMall/MyGift visa card online, check whether the merchant accepts that
                type of payment and leave room for taxes, delivery, or other charges. If a payment is declined,
                check the transaction status before trying again.
              </p>
              <p>
                A GiftCardMall/MyGift visa card may also have card-specific steps before your first purchase.
                Check its activation instructions and available funds, then contact the issuer if you’re unsure
                why the payment did not go through.
              </p>
              <p>
                For a GiftCardMall/MyGift visa card, a quick review of the remaining funds can help avoid a
                declined purchase. Leave room for taxes or other charges, and ask the issuer if the amount
                available doesn’t match your records.
              </p>
              <p>
                A GiftCardMall/MyGift visa card can work differently online than at a physical checkout.
                Follow the issuer’s online payment instructions and confirm acceptance with the merchant
                before attempting a large purchase.
              </p>
              <p>
                A GiftCardMall/MyGift visa card may also have card-specific steps before your first purchase.
                Check its activation instructions and available funds, then contact the issuer if you’re unsure
                why a payment did not go through.
              </p>
              <p>
                If you searched giftcardmall/mygift because your prepaid Visa was declined, start with the
                merchant’s transaction status and your card’s terms. The issuer is best placed to explain an
                authorization or card-specific restriction.
              </p>
              <h3>Before making a purchase</h3>
              <ul className="check-list compact-list">
                <li>Check the available funds through the verified issuer service.</li>
                <li>Allow for taxes, delivery, and other purchase costs.</li>
                <li>Check that the merchant accepts your specific prepaid card.</li>
                <li>Follow the issuer’s instructions for online transactions.</li>
                <li>Keep receipts and confirmations for your records.</li>
              </ul>
            </div>
            <div className="visa-callout">
              <span className="callout-mark" aria-hidden="true">↗</span>
              <span className="eyebrow-text">PAYMENT DIDN’T GO THROUGH?</span>
              <h3>Check before you try again.</h3>
              <p>
                Low available funds, activation requirements, merchant restrictions, or an authorization issue
                can affect a payment. Review the transaction status and contact your issuer for help.
              </p>
              <a href="#troubleshooting">See troubleshooting tips <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="section troubleshooting-section" id="troubleshooting">
          <div className="section-heading">
            <span className="eyebrow-text">PROBLEM SOLVING</span>
            <h2>Common questions, <span>clear next steps.</span></h2>
            <p>Practical next steps for GiftCardMall/MyGift Balance, activation, payment, and refund questions.</p>
          </div>
          <div className="problems-grid">
            {problems.map((problem, index) => (
              <article className="problem-card" key={problem.title}>
                <span className="problem-index">0{index + 1}</span>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section security-section" id="security">
          <div className="security-heading">
            <div className="security-badge" aria-hidden="true"><span>✓</span></div>
            <div>
              <span className="eyebrow-text">PROTECT YOUR CARD</span>
              <h2>Keep card details <span>to yourself.</span></h2>
              <p>Whether you’re searching giftcardmall/mygift information or looking up card instructions, your full card details belong only on a verified issuer service.</p>
            </div>
          </div>
          <div className="security-grid">
            <article><span>01</span><h3>Use verified websites</h3><p>Compare any balance service with the address provided in your card documentation.</p></article>
            <article><span>02</span><h3>Protect your credentials</h3><p>Never post your full card number, PIN, CVV, or verification code on an unrelated website.</p></article>
            <article><span>03</span><h3>Keep your receipts</h3><p>Save purchase records and confirmations so the issuer can help investigate a card question.</p></article>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="faq-heading">
            <span className="eyebrow-text">FREQUENTLY ASKED QUESTIONS</span>
            <h2>GiftCardMall/MyGift <span>FAQs.</span></h2>
            <p>Helpful answers about balance instructions, prepaid Visa use, and card safety.</p>
            <div className="faq-contact">For details about your specific card, contact its verified issuer.</div>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question}>
                <summary><span className="faq-count">0{index + 1}</span><span>{faq.question}</span><i aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing-cta">
          <div className="closing-star" aria-hidden="true">✳</div>
          <div>
            <span className="eyebrow-text">A LITTLE MORE CLARITY</span>
            <h2>Make informed <span>gift card choices.</span></h2>
            <p>Check the instructions supplied with your card, verify the service, and contact the issuer for account-specific questions.</p>
          </div>
          <a className="button button-light" href="#balance">Read the balance guide <span aria-hidden="true">↑</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-about">
            <a className="brand footer-brand" href="#home">GiftCard<span>Check</span><i /></a>
            <p>Independent educational information about gift card balances, activation, prepaid card use, and card safety.</p>
          </div>
          <div className="footer-links">
            <a href="#balance">Balance Guide</a>
            <a href="#mygift">MyGift Guide</a>
            <a href="#visa">Visa Cards</a>
            <a href="#troubleshooting">Troubleshooting</a>
            <a href="#security">Security</a>
            <a href="#faq">FAQs</a>
          </div>
        </div>
        <div className="footer-disclaimer">
          <strong>Disclaimer:</strong> This website is an independent informational resource. It is not affiliated with or endorsed by GiftCardMall, MyGift, Blackhawk Network, Visa, Mastercard, American Express, any bank, retailer, or gift card issuer. This website does not issue cards, process payments, retrieve private balances, activate cards, or access cardholder accounts. Product features, balance inquiry procedures, activation requirements, and restrictions vary by card and issuer. Always consult the official documentation supplied with your card.
        </div>
        <div className="footer-bottom">
          <span>© 2026 GiftCardCheck. All rights reserved.</span>
          <span>Independent educational information <i /> No card account access</span>
        </div>
      </footer>
    </>
  );
}
