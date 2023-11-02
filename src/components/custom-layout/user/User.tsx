'use client';
import { GoBell } from 'react-icons/go';
import { FiChevronDown } from 'react-icons/fi';
import { useProfile } from '@/hooks/useProfile';
import Image from 'next/image';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/navigation';
import { useOutside } from '@/hooks/useOutside';

export default function User() {
	const { logout } = useActions();
	const { profile } = useProfile();
	const { ref, isShow, setIsShow } = useOutside(false);
	const { push, refresh } = useRouter();

	return (
		<div className="min-w-72 relative">
			<div className="flex items-center justify-center gap-5">
				{profile && (
					<>
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-light text-inactive">
							<GoBell />
						</div>
						<div className="h-10 w-10 overflow-hidden rounded-lg bg-avatar">
							<Image
								src={profile.avatarPath}
								height={40}
								width={40}
								alt="avatar"
							/>
						</div>
						<div>
							<div className="text-base">{profile?.name}</div>
							<div className="text-xss">{profile?.speciality}</div>
						</div>
					</>
				)}
				<button onClick={() => setIsShow(!isShow)}>
					<FiChevronDown className="ml-[25px] text-1.5xl text-inactive" />
				</button>
			</div>
			{isShow && (
				<div
					ref={ref}
					className="absolute top-12 h-20 w-full animate-opacity  rounded-b-lg border border-background bg-bg-light/80 p-5"
				>
					<button
						onClick={() => {
							logout();
							setIsShow(false);
							push('/auth');
							refresh();
						}}
					>
						logout
					</button>
				</div>
			)}
		</div>
	);
}
