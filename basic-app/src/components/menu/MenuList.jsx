import Menu from './Menu.jsx';

export default function MenuList({ list }) {
    return (
        <nav>
            <ul>
                { list.map((item, idx) => 
                    <Menu   key={idx}
                            title={item.title}
                            href={item.href}
                            style={item.style} />
                ) }
            </ul>
        </nav>
    )
}