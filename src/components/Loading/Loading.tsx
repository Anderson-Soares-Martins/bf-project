import "./Loading.css";

interface LoadingProps {
  loading: boolean;
}

export default function Loading(loading: LoadingProps) {
  if (!loading.loading) {
    return null;
  }
  return (
    <div className="spinner-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
