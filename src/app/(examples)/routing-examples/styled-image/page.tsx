import Image from "next/image";
import styles from "./page.module.css";

export default function StyledImagePage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>静态图片 + 自定义样式 示例</h1>
          <p className={styles.heroSubTitle}>图片来自 public 目录，样式来自当前页面的 CSS Module</p>
        </section>

        <section className={styles.content}>
          <div className={styles.imageBox}>
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={220}
              height={46}
              priority
              className={styles.image}
            />
          </div>

          <p className={styles.note}>
            这个页面演示了两点：
            <br />
            1) 使用静态资源：<code>public/next.svg</code>
            <br />
            2) 使用局部样式：<code>page.module.css</code>，不会污染其它页面
          </p>
        </section>
      </div>
    </div>
  );
}
