export default function Home() {
  return (
    <>
      <header className="header">
        <div className="wrap bar">
          <a className="brand" href="#top">
            <img src="/mark.svg" alt="" width={40} height={40} />
            Cerava<span>.</span>
          </a>
          <nav aria-label="Điều hướng chính">
            <a href="#phuc-hinh">Phục hình</a>
            <a href="#quy-trinh">Quy trình</a>
          </nav>
          <a className="button button-small" href="#hop-tac">
            Hợp tác
          </a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span></span> Labo phục hình nha khoa
              </p>
              <h1>
                Chế tác tỉ mỉ.
                <br />
                <em>Nụ cười tự nhiên.</em>
              </h1>
              <p className="lede">
                Cerava Dental Lab đồng hành cùng bác sĩ và phòng khám, kết hợp
                thiết kế số với tay nghề kỹ thuật viên để chế tác phục hình cho
                từng ca.
              </p>
              <a className="button button-gold" href="#phuc-hinh">
                Khám phá phục hình
              </a>
            </div>
            <figure className="hero-image">
              <img
                src="/ceramic.jpg"
                width={1024}
                height={1024}
                alt="Kỹ thuật viên cầm mẫu cầu răng sứ"
                fetchPriority="high"
              />
              <figcaption>
                Chế tác phục hình <span>CAD/CAM</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="section wrap" id="phuc-hinh">
          <p className="eyebrow">
            <span></span> Danh mục phục hình
          </p>
          <h2>Giải pháp cho từng ca</h2>
          <div className="cards">
            <article className="card">
              <span className="icon icon-ceramic" aria-hidden="true"></span>
              <h3>Răng toàn sứ</h3>
              <p>
                Mão và cầu răng toàn sứ, chú trọng hình thể, sắc độ và độ trong
                tự nhiên.
              </p>
            </article>
            <article className="card">
              <span className="icon icon-metal" aria-hidden="true"></span>
              <h3>Sứ kim loại</h3>
              <p>
                Phục hình trên sườn kim loại với các lựa chọn hợp kim quý và bán
                quý.
              </p>
            </article>
            <article className="card">
              <span className="icon icon-frame" aria-hidden="true"></span>
              <h3>Hàm và khí cụ</h3>
              <p>
                Hàm khung, hàm tháo lắp, attachment và khí cụ chỉnh nha theo chỉ
                định của bác sĩ.
              </p>
            </article>
          </div>
        </section>
        <section className="process section" id="quy-trinh">
          <div className="wrap process-grid">
            <div>
              <p className="eyebrow">
                <span></span> Quy trình labo
              </p>
              <h2>
                Từ dữ liệu ca
                <br />
                đến phục hình.
              </h2>
              <p>
                Kỹ thuật số hỗ trợ thiết kế. Kỹ thuật viên kiểm soát từng chi
                tiết khi hoàn thiện.
              </p>
            </div>
            <ol className="steps">
              <li>
                <h3>Tiếp nhận ca</h3>
                <p>
                  Trao đổi với phòng khám về chỉ định, dữ liệu mẫu hàm và màu
                  răng.
                </p>
              </li>
              <li>
                <h3>Thiết kế và chế tác</h3>
                <p>
                  Dùng CAD/CAM khi phù hợp với vật liệu và yêu cầu phục hình.
                </p>
              </li>
              <li>
                <h3>Kiểm tra và bàn giao</h3>
                <p>
                  Rà soát hình thể, bề mặt và sắc độ, sau đó trao đổi về bàn
                  giao và bảo hành.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="wrap section" id="hop-tac">
          <div className="cta">
            <div>
              <p className="eyebrow">Dành cho bác sĩ và phòng khám</p>
              <h2>Chuẩn bị ca đầu tiên.</h2>
              <p>
                Tải danh sách thông tin cần chuẩn bị khi trao đổi ca với labo.
              </p>
            </div>
            <a className="button" href="/checklist.txt" download>
              Tải checklist gửi ca
            </a>
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <a className="brand" href="#top">
          <img src="/mark.svg" alt="" width={32} height={32} />
          Cerava<span>.</span>
        </a>
        <p>Concept nhận diện cho labo phục hình nha khoa.</p>
      </footer>
    </>
  );
}
