import MainLayout from '../layouts/MainLayout';

export default function Index() {
  return (
    <MainLayout>
      <div className="center">
        <h1>Добро пожаловать!</h1>
        <h3>Здесь собраны лучшие треки!</h3>
      </div>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </MainLayout>
  );
}
