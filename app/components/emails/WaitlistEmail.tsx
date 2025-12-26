import * as React from 'react';
import {
    Html,
    Body,
    Container,
    Text,
    Link,
    Preview,
    Section,
    Heading,
    Hr,
} from '@react-email/components';
import { DS } from '../../design-system/tokens';

export const WaitlistEmail = () => (
    <Html>
        <Preview>Vaylen // Waitlist Confirmed</Preview>
        <Body style={styles.main}>
            <Container style={styles.container}>
                {/* Brand Header */}
                <Heading style={styles.h1}>VAYLEN</Heading>

                {/* Status Line */}
                <Text style={styles.subhead}>
                    WAITLIST CONFIRMED
                </Text>

                {/* Core Message */}
                <Text style={styles.text}>
                    You have been added to the early access list for Vaylen v0.1.
                </Text>
                <Text style={styles.text}>
                    We are currently finalizing the build to ensure stability and precision. You will receive a direct notification via email as soon as your access is ready.
                </Text>

                <Hr style={styles.hr} />

                {/* Value Add Section */}
                <Text style={styles.label}>
                    RECOMMENDED READING
                </Text>
                <Text style={styles.text}>
                    Vaylen is built on specific physiological principles. While you wait for the software, we invite you to review the philosophy behind it.
                </Text>

                {/* Button Container - Explicitly styled to avoid clipping */}
                <Section style={styles.btnContainer}>
                    <Link style={styles.button} href="https://vaylen.app/journal">
                        OPEN THE JOURNAL
                    </Link>
                </Section>

                <Hr style={styles.hr} />

                {/* Footer */}
                <Text style={styles.footer}>
                    © 2025 LA COMPAGNIE VAYLEN INC.
                </Text>
            </Container>
        </Body>
    </Html>
);

// --- STYLES: 100% Tokenized (Inverted for Light Theme) ---
const styles = {
    main: {
        // INVERSION: Use 'ink' (White) for Background
        backgroundColor: DS.email.colors.ink,
        fontFamily: DS.email.typography.sans,
        // INVERSION: Use 'bg' (Black) for Text
        color: DS.email.colors.bg,
    },
    container: {
        margin: '0 auto',
        padding: '40px 20px',
        maxWidth: '560px',
        // Use 'steelActive' (#E5E5EA) for the subtle light border
        border: `1px solid ${DS.email.colors.steelActive}`,
        marginTop: '40px',
    },
    h1: {
        color: DS.email.colors.bg, // Black
        fontSize: DS.email.typography.sizeDisplay, // 32px
        fontWeight: 'bold',
        letterSpacing: '-1.5px',
        margin: `0 0 ${DS.email.spacing.xl}`,
        fontFamily: DS.email.typography.sans,
    },
    subhead: {
        color: DS.email.colors.bg, // Black
        fontSize: '16px',
        fontWeight: '700',
        letterSpacing: '-0.02em',
        marginBottom: DS.email.spacing.lg,
        textTransform: 'uppercase' as const,
        fontFamily: DS.email.typography.sans,
    },
    label: {
        // Use 'inkTertiary' (#525252) for dark grey labels
        color: DS.email.colors.inkTertiary,
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.05em',
        marginBottom: '12px',
        textTransform: 'uppercase' as const,
        fontFamily: DS.email.typography.mono,
    },
    text: {
        // Use 'inkTertiary' (#525252) for softer body text
        color: DS.email.colors.inkTertiary,
        fontSize: '15px',
        lineHeight: '24px',
        marginBottom: DS.email.spacing.lg,
        fontFamily: DS.email.typography.sans,
    },
    btnContainer: {
        textAlign: 'left' as const,
        marginTop: DS.email.spacing.md,
        marginBottom: DS.email.spacing.xl,
    },
    button: {
        backgroundColor: DS.email.colors.bg, // Black Button
        borderRadius: '4px',
        color: DS.email.colors.ink, // White Text
        fontSize: '13px',
        fontWeight: '600',
        textDecoration: 'none',
        padding: '12px 24px',
        display: 'inline-block',
        fontFamily: DS.email.typography.sans,
    },
    hr: {
        borderColor: DS.email.colors.steelActive,
        margin: `${DS.email.spacing.xl} 0`,
    },
    footer: {
        color: DS.email.colors.inkSubtle,
        fontSize: DS.email.typography.sizeCaption,
        letterSpacing: '0.05em',
        textTransform: 'uppercase' as const,
        fontFamily: DS.email.typography.mono,
    },
};

export default WaitlistEmail;