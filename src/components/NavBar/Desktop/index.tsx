import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faHome,
	faGlobe,
	faEnvelope,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Container, Logo, Items, Item } from "./styles";

export const Desktop: React.FC = () => {
	return (
		<Container>
			<Items>
				<li>
					<Link href="/">
						<Item>
							<FontAwesomeIcon icon={faHome} />
							Home
						</Item>
					</Link>
				</li>
				<li>
					<Link href="/catalog">
						<Item>
							<FontAwesomeIcon icon={faGlobe} />
							Catálogo
						</Item>
					</Link>
				</li>
				<li>
					<Link href="/" scroll={false}>
						<Logo>D&apos;BAGS</Logo>
					</Link>
				</li>
				<li>
					<Link href="/feedback">
						<Item>
							Feedback
							<FontAwesomeIcon icon={faEnvelope} />
						</Item>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<Item>
							Sobre
							<FontAwesomeIcon icon={faUser} />
						</Item>
					</Link>
				</li>
			</Items>
		</Container>
	);
};
