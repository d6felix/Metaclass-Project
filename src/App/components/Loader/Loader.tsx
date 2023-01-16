import "./Loader.css"

var classNames = require('classnames');

enum LoaderSize {
    s = 's',
    m = 'm',
    l = 'l'
}

export type LoaderProps = {
    loading?: boolean;
    size?: LoaderSize;
    className?: string;
};

export const Loader: React.FC<LoaderProps> = ({ loading = true, size = LoaderSize.m, className }) => {
    if (loading) {
        return (
            <div className={classNames("loader", className, `loader_size-${size}`)} >
            </div>
        );
    } else {
        return null;
    }
};

export default Loader;