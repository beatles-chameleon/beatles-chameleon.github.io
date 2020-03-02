<template>
  <div class="container">
    <div class="brand">
      <div class="left">
        <img class="logo" :src="logo" />
      </div>
      <div class="right">
        <h1 class="title">{{ title }}</h1>
        <p class="desc">{{ description }}</p>
        <div class="links">
          <a class="btn btn-primary" href="/get-started.html">快速开始</a>
          <a
            class="btn btn-default"
            href="https://github.com/didi/chameleon"
            target="_blank"
            rel="noopener"
            >GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config';
import logo from '@/public/logo.svg';

const { title, description } = config;

export default {
  data() {
    return {
      logo,
      title,
      description,
    };
  },
};
</script>

<style lang="stylus" scoped>
@import "~@/styles/palette.styl";

.container {
  .brand {
    display: flex;
    flex-wrap: wrap;
    margin-top: 6.4rem;
    @media (max-width: 766px) {
      .left {
        width: 100%;
        .logo {
          margin-right: auto;
        }
      }
      .right {
        text-align: center;
      }
    }
    @media (min-width: 767px) {
      .left {
        width: 44%;
        .logo {
          margin-right: 4.8rem;
        }
      }
    }
    .left {
      display: flex;
      .logo {
        width: 15rem;
        margin-left: auto;
      }
    }
    .right {
      flex: 1;
      .title {
        margin-top: 0
        margin-bottom: 0
        font-size: 4.8rem;
        font-weight: 700;
      }
      .desc {
        margin-top: .2rem;
        margin-bottom: 2.4rem;
        font-size: 1.5rem;
        font-weight: 500;
      }
      .links {
        .btn {
          position: relative;
          box-sizing border-box;
          padding: 1rem 2.6rem;
          font-size: 1.1rem;
          font-weight: 500;
          border: 2px solid transparent;
          border-radius: 2rem;
          overflow: hidden;
          + .btn {
            margin-left: .8rem;
          }
          &.btn-primary {
            color: #fff;
            background: $accentColor;
            transition: 2s;
            &::before {
              content: '';
              position: absolute;
              left: -2.2rem;
              top: 0;
              display: block;
              height: 100%;
              width: 2rem;
              background: rgba(#fff, .2);
              transform: skew(148deg);
              transition: .1s;
            }
            &:hover::before {
              left: 40%;
            }
          }
          &.btn-default {
            border-color: $accentColor;
          }
        }
      }
    }
  }
}
</style>
