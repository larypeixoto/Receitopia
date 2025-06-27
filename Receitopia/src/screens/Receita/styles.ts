import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 15,
    },

    recipeImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#7D8F69',
        justifyContent: 'center',
        alignItems: 'center',
    },

    recipeImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#6B7B5A',
    },

    recipeInfo: {
        flex: 1,
    },

    recipeTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4A5A3A',
        marginBottom: 4,
    },

    recipeSubtitle: {
        fontSize: 14,
        color: '#7D8F69',
    },

    actionButton: {
        backgroundColor: '#D8E1CE',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 30,
        alignSelf: 'center',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#7D8F69',
    },

    actionButtonActive: {
        backgroundColor: '#7D8F69',
    },

    actionButtonText: {
        color: '#7D8F69',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },

    actionButtonTextActive: {
        color: '#fff',
    },

    section: {
        marginBottom: 25,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A5A3A',
        marginBottom: 15,
    },

    ingredienteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7D8F69',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 8,
        gap: 12,
    },

    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#D8E1CE',
        borderWidth: 2,
        borderColor: '#D8E1CE',
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkboxChecked: {
        backgroundColor: '#4A5A3A',
        borderColor: '#4A5A3A',
    },

    ingredienteText: {
        flex: 1,
        fontSize: 14,
        color: '#fff',
    },

    ingredienteTextChecked: {
        textDecorationLine: 'line-through',
        opacity: 0.7,
    },

    receitaInput: {
        backgroundColor: '#7D8F69',
        borderRadius: 15,
        padding: 15,
        fontSize: 14,
        color: '#fff',
        minHeight: 150,
        textAlignVertical: 'top',
    },

    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#7D8F69',
        borderRadius: 25,
        paddingVertical: 15,
        marginTop: 20,
        marginBottom: 30,
    },

    navItem: {
        padding: 8,
    },
});