import styled from '@emotion/styled';

const StyledCategoryIngredientFrom = styled.div`
  .item_form_overlay {
    position: fixed;
    background-color: #00000086;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
  }

  @keyframes formAnime {
    from {
      top: -50%;
    }
    to {
      top: 50%;
    }
  }

  .form_container {
    animation: formAnime;
    animation-duration: 0.6s;

    position: fixed;
    background-color: #000000e2;
    top: 50%;
    left: 50%;
    width: 97vw;
    max-width: 650px;
    height: fit-content;
    max-height: 97vh;
    overflow: auto;
    transform: translate(-50%, -50%);
    z-index: 4;

    display: flex;
    flex-direction: column;
    padding: 1rem 10px 2rem;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    [name='cancel-btn'] {
      background: none;
      color: #a52a2a;
      font-weight: 600;
      font-size: 1.2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin: 1rem 0 0;

      h3 {
        width: 100%;
        color: #f5f5f5;
        cursor: default;
      }

      .item_name {
        background: none;
        color: #f5f5f5;
        border: none;
        border-bottom: 1px solid #f5f5f5;
        height: 35px;
        width: 100%;
        padding: 10px 0;
        font-size: 1.1rem;
        text-align: center;
        margin: 10px 0;
      }

      textarea {
        height: fit-content;
        min-height: 240px;

        min-width: 100%;
        padding: 10px;
        margin: 0;
        line-height: 20px;
      }

      .submit-item {
        background-color: #a52a2a;
        color: #f5f5f5;
        margin: 1rem auto 0;
        width: 100%;
        padding: 10px 0;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }
`;

export default StyledCategoryIngredientFrom;
